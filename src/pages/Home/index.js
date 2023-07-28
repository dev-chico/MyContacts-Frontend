import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Container, Header,
  ListHeader, InputSearchContainer,
  ErrorContainer, EmptyListContainer,
  SearchNotFoundContainer,
} from './styles';
import { formatPhone } from '../../utils/formatPhone';
import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';
import { Loader } from '../../components/Loader';
import { Button } from '../../components/Button';
import ContactsService from '../../services/ContactsService';
import { Modal } from '../../components/Modal';
import { toast } from '../../utils/toast';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null);

  const filteredContacts = useMemo(() => contacts.filter(
    (contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
  ), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactsService.listContacts(orderBy);
      setContacts(contactsList);
      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleTryAgain() {
    loadContacts();
  }

  function handleDeleteContact(contact) {
    setContactBeingDeleted(contact);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setContactBeingDeleted(null);
  }

  async function handleConfirmDeleteContact() {
    try {
      setIsLoadingDelete(true);

      await ContactsService.deleteContact(contactBeingDeleted.id);

      setContacts((prevState) => prevState.filter((c) => c.id !== contactBeingDeleted.id));
      handleCloseDeleteModal();

      toast({
        type: 'success',
        text: 'Contato deletado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar o contato!',
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Modal
        danger
        title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
        visible={isDeleteModalVisible}
        isLoading={isLoadingDelete}
      >
        <p>Esta ação não poderá ser desfeita.</p>
      </Modal>

      {
        contacts.length > 0 && (
        <InputSearchContainer>
          <input
            type="text"
            placeholder="Pesquisar contato..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputSearchContainer>
        )
      }

      <Header justifyContent={(hasError ? 'flex-end' : (
        contacts.length > 0 ? 'space-between' : 'center'
      ))}
      >
        {
          (!hasError && contacts.length > 0) && (
            <strong>
              {filteredContacts.length}
              {filteredContacts.length === 1 ? ' contato' : ' contatos'}
            </strong>
          )
        }
        <Link to="/new">Novo contato</Link>
      </Header>

      {
        hasError && (
          <ErrorContainer>
            <img src={sad} alt="Sad icon" />

            <div className="details">
              <strong>Ocorreu um erro ao obter os seus contatos!</strong>
              <Button onClick={handleTryAgain}>Tentar novamente</Button>
            </div>
          </ErrorContainer>
        )
      }

      {
        !hasError && (
          <>
            {
              (contacts.length < 1 && !isLoading) && (
                <EmptyListContainer>
                  <img src={emptyBox} alt="Empty box icon" />

                  <p>
                    Você ainda não tem nenhum contato cadastrado!
                    Clique no botão
                    {' '}
                    <strong>”Novo contato”</strong>
                    {' '}
                    à cima para cadastrar o seu primeiro!

                  </p>
                </EmptyListContainer>
              )
            }

            {
              (contacts.length > 0 && filteredContacts.length < 1) && (
                <SearchNotFoundContainer>
                  <img src={magnifierQuestion} alt="magnifier question icon" />
                  <span>
                    Nenhum resultado foi encontrado para
                    {' '}
                    <strong>
                      ”
                      {searchTerm}
                      ”
                    </strong>
                    .
                  </span>
                </SearchNotFoundContainer>
              )
            }

            {
              filteredContacts.length > 0 && (
                <ListHeader orderBy={orderBy}>
                  <button type="button" className="sort-button" onClick={handleToggleOrderBy}>
                    <span>Nome</span>
                    <img src={arrow} alt="Arrow" />
                  </button>
                </ListHeader>
              )
            }

            {
              filteredContacts.map((contact) => (
                <Card key={contact.id}>
                  <div className="info">
                    <div className="contact-name">
                      <strong>{contact.name}</strong>
                      {contact.category_name && <small>{contact.category_name}</small>}
                    </div>

                    <span>{contact.email}</span>
                    <span>{formatPhone(contact.phone)}</span>
                  </div>

                  <div className="actions">
                    <Link to={`/edit/${contact.id}`}>
                      <img src={edit} alt="Edit" />
                    </Link>
                    <button type="button" onClick={() => handleDeleteContact(contact)}>
                      <img src={trash} alt="Delete" />
                    </button>
                  </div>
                </Card>
              ))
            }
          </>
        )
      }
    </Container>
  );
}

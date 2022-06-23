import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/navbar';
import styles from './login.module.css';

function LoginPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    function saveData() {
        localStorage.setItem("nome", JSON.stringify(nome));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("senha", JSON.stringify(senha));
        history.push('/');
    }

  return (
    <>
      <div className={styles.window}>
        <NavBar />
        <div className={styles.forms}>
          <div className={styles.container}>
            <h1>Cadastro</h1>
            <p>Insira seus dados para receber as promoções!</p>
            <div className={styles.labels}>
              <label>Nome</label>
            </div>
            <input
              onChange={(e) => setNome(e.target.value)}
              type="email"
              value={nome}
              className={styles.input}
              placeholder="Nome"
            />
            <div className={styles.labels}>
              <label>Email</label>
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              className={styles.input}
              placeholder="www.email.com"
            />
            <div className={styles.labels}>
              <label>Senha</label>
            </div>
            <input
              onChange={(e) => setSenha(e.target.value)}
              type="email"
              value={senha}
              className={styles.input}
              placeholder="Digite sua senha"
            />
            <div className={styles.submitButton}>
            <button className={styles.button} type="button" onClick={saveData}>
              Cadastrar
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

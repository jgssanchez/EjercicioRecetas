
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {NavLink, Link} from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Usuario:', username, 'Contraseña:', password);
  };

  return (
    <div className="container mt-5">
      <Form className='mx-auto my-4' style={{ maxWidth: '500px' }}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary m-2" onClick={handleLogin}>
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );
};

export default Login;

import React from 'react';
import { Container } from './styles';

export const Table = () =>{

    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Nome do Aluno</th>
              <th>Nome do Instrutor</th>
              <th>Tipo de Treino</th>
              <th>Horário</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ailton Junior</td>
              <td>Renan Modesto</td>
              <td>Hipertrofia</td>
              <td>Seg à Sex</td>
            </tr>
            <tr>
              <td>Ailton Junior</td>
              <td>Renan Modesto</td>
              <td>Hipertrofia</td>
              <td>Seg à Sex</td>
            </tr>
            <tr>
              <td>Ailton Junior</td>
              <td>Renan Modesto</td>
              <td>Hipertrofia</td>
              <td>Seg à Sex</td>
            </tr>
            <tr>
              <td>Ailton Junior</td>
              <td>Renan Modesto</td>
              <td>Hipertrofia</td>
              <td>Seg à Sex</td>
            </tr>
          </tbody>
        </table>
      </Container>
    );
}
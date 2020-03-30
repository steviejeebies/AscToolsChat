import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import boatImage from '../assets/boatImage.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed top;
    background-size: cover;
    color: #efefef;
    background-color: #C1D5E0;
    height: 350px;
    position: relative; 
    z-index: -2; 
  }

  .overlay {
    background-color: transparent;
    opacity: 0.0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      
      <div class="col-lg-8 order-lg-1">
          <div class="p-5">
            <h2 class="display-1">Welcome</h2>
            <h3 class="display-5">A lifestyle recommendation app!</h3>
          </div>
        </div>
      
    </Jumbo>
  </Styles>
)

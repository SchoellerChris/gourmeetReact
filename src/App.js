import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div class="container-fluid">
    <div class="row">
        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">

            <div id="fora" class="row text-white cardapio">
                <div class="col-12 m-2 pb-3 pt-3 pr-2 menu">
                    <h1 class="titulo">Cardápio</h1>

                </div>


                <div  id="1" class="col-12 menus">
                    <h4 class="p-3">Massas</h4>

                </div>
                <div  id="11" class="col-12 menus" >
                    <h4 class="p-3">Pizzas</h4>

                </div>
                <div  id="2" class="col-12 menus">
                    <h4 class="p-3">Petiscos</h4>

                </div>
                <div  id="4" class="col-12 menus">
                    <h4 class="p-3">Hambúrgueres</h4>

                </div>
                <div  id="3" class="col-12 menus">
                    <h4 class="p-3">Carnes</h4>

                </div>
                <div  id="5" class="col-12 menus">
                    <h4 class="p-3">Linha Fit</h4>

                </div>
                <div  id="6" class="col-12 menus">
                    <h4 class="p-3">Sobremesas</h4>

                </div>
                <div  id="7" class="col-12 menus">
                    <h4 class="p-3">Vinhos</h4>

                </div>
                <div  id="8" class="col-12 menus">
                    <h4 class="p-3">Sucos</h4>

                </div>
                <div  id="9" class="col-12  menus">
                    <h4 class="p-3">Refrigerantes</h4>

                </div>
                <div  id="10" class="col-12 menus">
                    <h4 class="p-3">Cervejas especiais</h4>
                </div>

            </div>
        </div>
        </div>
        <div id="cardapio2" class="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                <div class="row">
                    <div class="col-12" id="pratos">
                        <div class="col-12 pt-5">
                            <h1 class="titulo">Recomendações do Chef </h1> <a href="cart/index.html"><i
                                    class="fas fa-shopping-cart mr-5"></i> </a>
                            <div class="row">
                                <div class="col-12 p-3 pt-5">
                                    <div class="row">
                                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>


            </div>

  );
}

export default App;

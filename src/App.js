import React from 'react';
import { Card, CardImage, CardBody, CardTitle, CardText, CardFooter } from './components/Card';

function App() {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Карточка с изображением */}
        <div className="col-md-4">
          <Card>
            <div className="card-img-wrapper">
              <CardImage src="https://www.rupixel.ru/files/preview/1280x854/19071782554159uzufoev92upexb1pug42shj383h2frhzm1quqbppf8tsrlmb1avhfx0jpplclrdoms0em17yhyqrnwb9ow4lui8is9x2zvu6cxad.jpg" alt="Пример" />
            </div>
            <CardBody>
              <CardTitle>Заголовок карточки</CardTitle>
              <CardText>Это пример текста карточки. Здесь можно разместить описание.</CardText>
              <a href="#" className="btn btn-primary">Перейти</a>
            </CardBody>
          </Card>
        </div>

        {/* Карточка только с текстом */}
        <div className="col-md-4">
          <Card>
            <CardBody>
              <CardTitle>Текстовая карточка</CardTitle>
              <CardText>Пример карточки без изображения, содержащей только текстовое содержимое.</CardText>
              <a href="#" className="btn btn-outline-primary">Подробнее</a>
            </CardBody>
          </Card>
        </div>

        {/* Карточка с заголовком и футером */}
        <div className="col-md-4">
          <Card>
            <div className="card-header">Заголовок</div>
            <CardBody>
              <CardTitle>Особая карточка</CardTitle>
              <CardText>Карточка с заголовком и нижним колонтитулом.</CardText>
              <a href="#" className="btn btn-outline-primary">Действие</a>
            </CardBody>
            <CardFooter>2 дня назад</CardFooter>
          </Card>
        </div>

        {/* Цветная карточка */}
        <div className="col-md-4">
          <Card className="text-white bg-primary">
            <CardBody>
              <CardTitle>Цветная карточка</CardTitle>
              <CardText>Пример карточки с цветным фоном и белым текстом.</CardText>
              <a href="#" className="btn btn-light">Действие</a>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
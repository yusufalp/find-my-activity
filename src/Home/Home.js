import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div>
      <header className='home-header'>
        <h1>Find My Activity</h1>
        <Link href='/find'>Find Activity</Link>
        <Link href='/add'>Add Activity</Link>
      </header>
      <section>
        <h2>What is this website?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusamus, veniam
          voluptatibus a deleniti ab sequi? At
          consequuntur porro nesciunt et vel ratione
          accusamus voluptatibus, distinctio est minus
          explicabo error ab ut reprehenderit repudiandae
          ullam magni. Quam quasi possimus praesentium harum
          eaque in odit, maiores repellat iste architecto
          magni explicabo tempora necessitatibus eligendi
          saepe totam voluptatum vel. Optio, neque. Voluptas
              </p>
      </section>
      <hr />
      <section>
        <h2>How to use this website?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Accusamus, veniam
          voluptatibus a deleniti ab sequi? At
          consequuntur porro nesciunt et vel ratione
          accusamus voluptatibus, distinctio est minus
          explicabo error ab ut reprehenderit repudiandae
          ullam magni. Quam quasi possimus praesentium harum
          eaque in odit, maiores repellat iste architecto
          magni explicabo tempora necessitatibus eligendi
          saepe totam voluptatum vel. Optio, neque. Voluptas
              </p>
      </section>
    </div>
  )
}
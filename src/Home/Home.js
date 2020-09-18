import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div>
      <header className='home-header'>
        <h1>Find My Activity</h1>
        <Link to='/find' className="home-links">Find Activity</Link>
        <Link to='/add' className="home-links">Add Activity</Link>
      </header>

      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h3>Save time</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Expedita quo quos, reiciendis
              dignissimos perferendis voluptas tempora provident.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Give back to community</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Expedita quo quos, reiciendis
              dignissimos perferendis voluptas tempora provident.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Enjoy</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Expedita quo quos, reiciendis
              dignissimos perferendis voluptas tempora provident.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <section>
        <h2>How to use this website?</h2>
        <p>
          There are two sections in this website where you can interact about the activities: Find and Add
          Activity.
        </p>
        <p>
          In the Find Activity section, search activities by the category. Choose outdoors if you want
          your child to work on something outdoor. Do you want something more like academics related, we got that. How about sports?
          We are constantly increasing the amount of the categories as we see more requests.
        </p>
        <p>
          In the Add Activity section, you can add your own activity. Have you been doing an activity with your child,
          share it with our community. Simply add the details of the activity requested and it will be posted for our
          users to search for.
        </p>
        <p>
          Enjoy!
        </p>
      </section>
    </div>
  )
}
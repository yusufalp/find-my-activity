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

      <div className="group">
        <div className="item">
          <img className="feature-img" src="/images/chronometer.png" alt="timer"></img>
          <h3>Save time</h3>
          <p>
            Sure you can search for many activities online
            however, Find My Activity is the only place you
            can find it right away, We do not let you look
            for the needle in the hay
            </p>
        </div>
        <div className="item">
          <img className="feature-img" src="/images/group.png" alt="group of people"></img>
          <h3>Give back to community</h3>
          <p>
            You can share your favorite activities with our community
            and we are forever grateful for that. After all, it takes a
            village, am I right?
            </p>
        </div>
        <div className="item">
          <img className="feature-img" src="/images/happiness.png" alt="happy family"></img>
          <h3>Enjoy</h3>
          <p>
            These activities are meant for kids (and kids inside you).
            So you can either enjoy it by yourself or the whole family
            </p>
        </div>
      </div>


      <img className="group-kids" src="/images/group-kids.png" alt="group of kids"></img>
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
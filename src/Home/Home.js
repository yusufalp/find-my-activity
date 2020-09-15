import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div>
      <header className='home-header'>
        <h1>Find My Activity</h1>
        <Link to='/find'>Find Activity</Link>
        <Link to='/add'>Add Activity</Link>
      </header>
      <section>
        <h2>What is this website?</h2>
        <p>
          Find My Activity has been created with work-from-home parents in mind. The purpose of this
          website is to provide activities for children to learn while their parents are working. Find My Activity
          is designed by the community members for the community members.
              </p>
      </section>
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
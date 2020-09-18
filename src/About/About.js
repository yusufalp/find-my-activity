import React from 'react';

export default function About() {
  return (
    <div>
      <header>
        <h2>About</h2>
      </header>
      <hr />
      <section>
        <h2>What is this site is about?</h2>
        <p>
          Find My Activity has been created with work-from-home
          parents in mind. The purpose of this website is to provide
          activities for children to learn while their parents are working.
          Find My Activity is designed by the community members for the community members.
        </p>
      </section>
      <hr />
      <section>
        <h2>Why did we do this site?</h2>
        <p>
          You asked and we listened. Parent who are working from home are finding it hard to
          come up with ideas for their children to work on. This website brings the community together 
          to share ideas for parents. If you have a great idea that worked for your child, share it 
          by going to add activity page. We will be forever grateful!
        </p>
        {/* <img src="/images/yusuf-alp.jpg" alt="profile-pic" /> */}
      </section>
    </div>
  )
}
import React from 'react';

export default function About() {
  return (
    <div>
      <header>
        <h2>About</h2>
      </header>
      <hr />
      <section>
        <h2>What is this page is about?</h2>
        <p>
          Find My Activity has been created with work-from-home 
          parents in mind. The purpose of this website is to provide 
          activities for children to learn while their parents are working. 
          Find My Activity is designed by the community members for the community members.
        </p>
      </section>
      <hr />
      <section>
        <h2>Who is the developer</h2>
        <p>
          Yusuf is a teacher-turned-software engineer and a Life-long educator and learner 
          who is passionate about technology and education that makes our world better.
        </p>
        <img src="/images/yusuf-alp.jpg" alt="profile-pic" />
      </section>
    </div>
  )
}
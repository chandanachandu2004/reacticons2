// import React from 'react'
// import Image from './siet.jpg'
// import Header from './Header.css'



// const Home = () => {
//   return (

// <div> <center><h1>SHRIDEVI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h1>
//      <img src={Image} height={300} width={300}/></center>
//      <p>Shridevi Institute of Engineering and Technology (SIET), Tumakuru, Karnataka is affiliated to Visvesvaraya Technological University, Belagavi, Karnataka, and is approved by AICTE New Delhi. Shridevi Institute of Engineering and Technology is a brainchild of Honorable Dr. M. R. Hulinaykar, (Chairman and Managing Trustee, SCT, Tumakuru). He is the President of Sri Shridevi Charitable Trust (R.), which is running 12 Institutions under various streams of education. His love for education and care for his native district manifested itself in the form of this college.</p>
//      <p>SIET was established in the year 2002 with the sole aim to impart quality Technical Education. It is approved by AICTE and affiliated to Visvesvaraya Technological University, Belagavi Karnataka state and presently offers undergraduate and postgraduate Programmes with annual intake of 345 and 84 respectively.</p>
//      <p>At present, College offers 7 Under-Graduate Programmes, 4 Post Graduate Programmes and 4 Ph.D. Research Programmes – covering “Engineering and Technology” and “Management” streams. Since 2006, 17+ Batches of Engineering students have successfully passed out and many of our students have pursued their higher studies in India or abroad and have well settled in their life.</p>
//     <h2>GENESIS</h2>
//     <p>Shridevi Institute of Engineering and Technology is functioning under the aegis of the Two Decade old “Sri Shridevi Charitable Trust (R.), Tumakuru”. The Trust was founded for promoting the cause of Quality Education, by Dr. M. R. Hulinaykar, a famous surgeon, an Academician and Educationalist as well. The Trust runs a network of more than 10 Institutions and is one of the Largest Educational Groups in the Karnataka.

// The establishment of the Shridevi Institute of Engineering and Technology in 2002 stimulates the ascendance of plateau of achievement of academic excellence, in dissemination of quality education from preprimary to post graduate level by Sri Shridevi Charitable Trust (R.), ensconced at Tumakuru, by a social worker The Managing Trustee Honorable Dr. M. R. Hulinaykar in 1992.

// Many of our students have obtained excellent marks in the university examinations and are in great demand in the industries in India and abroad.</p>
// <h2>Facilities And Infrastructure</h2>
// <ul>
//   <li>class room</li>
//   <li> computer lab</li>
//   <li> library</li>
//   <li>seminar hall</li>
//   <li>Auditorium</li>
//   <li>campus placement drive</li>
//   <li>college canteen</li>
//   <li>sports facilities</li>
//   <li>boys-girls hostel</li>
// </ul>
// <p>The institute has an excellent infrastructure. All the departments are well equipped with good laboratories. The institute has a very good academic ambience. The Students are punctual and regular in attending classes. Modern facilities are used for effective teaching such as LCD projectors, Over head Projectors and interactive DVD’s. A central computing facility and internet with high speed connectivity of 300 mbps leased line which is kept open for the students daily from 8:00 AM to 5:00 PM.</p>



//     </div>
    
    
//   )
// }

// export default Home

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Card className='card'>
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome to the College
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Explore our college and discover the opportunities it offers. Whether you're a student, faculty member, or visitor, you'll find a welcoming environment for learning and growth.
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
            Our college is known for:
            <ul className='list'>
              <li>High-quality education and research programs</li>
              <li>Experienced faculty members</li>
              <li>State-of-the-art facilities</li>
              <li>Engaging extracurricular activities</li>
            </ul>
          </Typography>
        </CardContent>

        <div className="card-divider"></div> {/* Add space between cards */}

        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Academic Programs
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our college offers a wide range of academic programs to suit your interests and career goals. Whether you're interested in STEM fields, humanities, or arts, we have something for everyone.
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
              Explore our programs and find the one that's right for you.
            </Typography>
          </CardContent>
        </Card>

        <div className="card-divider"></div> {/* Add space between cards */}

        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Campus Facilities
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our campus is equipped with state-of-the-art facilities, including modern classrooms, well-equipped labs, a library, sports facilities, and a student center.
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
              We provide a conducive environment for both academic and extracurricular activities.
            </Typography>
          </CardContent>
        </Card>

        <div className="card-divider"></div> {/* Add space between cards */}

        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Student Life
            </Typography>
            <Typography variant="body2" color="text.secondary">
              At our college, student life is vibrant and diverse. Join clubs, participate in events, and make lasting friendships.
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
              We believe in holistic development and encourage students to explore their passions beyond academics.
            </Typography>
          </CardContent>
        </Card>

        <div className="card-divider"></div> {/* Add space between cards */}

        <CardContent>
          <Typography variant="h5" component="div">
            Campus 
          </Typography>
          <div className="image-container">
            <CardMedia
              component="img"
              alt="Sample Image 1"
              height="200"
              src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              title="Sample Image 1"
              style={{ marginRight: '16px' }}
            />
            <div style={{ width: '16px' }}></div> {/* Add space */}
            <CardMedia
              component="img"
              alt="Sample Image 2"
              height="200"
              src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              title="Sample Image 2"
            />
          </div>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
}

export default Home;
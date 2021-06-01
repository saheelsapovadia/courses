import React, { useState, useEffect, useRef } from 'react';
import './course.css';
import { FiVideo } from 'react-icons/fi';
import { RiKeynoteLine } from 'react-icons/ri';
import { GrGlobe } from 'react-icons/gr';
export const Course = () => {
  useEffect(() => {
    window.onscroll = () => toggleNav();
  });
  const [showSticky, setShowSticky] = useState(false);
  const scrollTo = (ele) => {
    // ele.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    // });
    var headerOffset = 85;
    var elementPosition = ele.offsetTop;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };
  const stickyNav = (
    <>
      <div id='sticku' class='sticky-tabs-wrap sticky'>
        <h4>PSAI 101: Pre-Seed &amp; Angel Investing Class</h4>
        <ul class='custom-tabs'>
          <li
            id='about'
            class='active'
            onClick={() => {
              scrollTo(aboutRef.current);
            }}
          >
            About
          </li>
          <li
            id='syllabus'
            class=''
            onClick={() => {
              scrollTo(syllabusRef.current);
            }}
          >
            Syllabus
          </li>
          <li
            id='instructor'
            class=''
            onClick={() => {
              scrollTo(instructorRef.current);
            }}
          >
            Instructor
          </li>
          <li
            id='ta'
            class=''
            onClick={() => {
              scrollTo(taRef.current);
            }}
          >
            TAs
          </li>
          <li
            id='speakers'
            class=''
            onClick={() => {
              scrollTo(speakersRef.current);
            }}
          >
            Speakers
          </li>
          <li
            id='faq'
            class=''
            onClick={() => {
              scrollTo(faqRef.current);
            }}
          >
            FAQ
          </li>
          <li
            id='press'
            class=''
            onClick={() => {
              scrollTo(pressRef.current);
            }}
          >
            Press
          </li>
        </ul>
      </div>
    </>
  );
  useEffect(() => {
    var sticky = document.getElementById('navbar').offsetTop;
    setSticky(sticky);
  }, []);
  const [sticky, setSticky] = useState();
  const toggleNav = (e) => {
    var navbar = document.getElementById('navbar');
    //console.log(navbar);
    //var sticky = navbar.offsetTop;
    //console.log(window.pageYOffset, sticky);
    if (window.pageYOffset >= sticky) {
      //navbar.classList.add('sticky1');
      setShowSticky(true);
    } else {
      //navbar.classList.remove('sticky1');
      setShowSticky(false);
    }
    //console.log(navbar.classList);
  };
  const aboutRef = useRef(null);
  const syllabusRef = useRef(null);
  const instructorRef = useRef(null);
  const taRef = useRef(null);
  const speakersRef = useRef(null);
  const faqRef = useRef(null);
  const pressRef = useRef(null);

  // useEffect(() => {
  //   let observer;
  //   if (
  //     aboutRef.current &&
  //     syllabusRef.current &&
  //     instructorRef.current &&
  //     taRef &&
  //     speakersRef &&
  //     faqRef &&
  //     pressRef
  //   ) {
  //     const options = {
  //       threshold: 0.2,
  //     };
  //     observer = new IntersectionObserver((entries, observer) => {
  //       entries.forEach((entry) => {
  //         const navElement = document.querySelector(
  //           `#sticku #${entry.target.id}`
  //         );
  //         console.log(navElement);
  //         if (navElement !== null && entry.isIntersecting) {
  //           if (!navElement.classList.contains('active')) {
  //             navElement.classList.add('active');
  //           }
  //         } else if (
  //           navElement !== null &&
  //           navElement.classList.contains('active')
  //         ) {
  //           navElement.classList.remove('active');
  //         }
  //       });
  //     }, options);
  //     observer.observe(aboutRef.current);
  //     observer.observe(syllabusRef.current);
  //     observer.observe(instructorRef.current);
  //     observer.observe(taRef.current);
  //     observer.observe(speakersRef.current);
  //     observer.observe(faqRef.current);
  //     observer.observe(pressRef.current);
  //   }
  //   return () => observer.disconnect();
  // }, [
  //   aboutRef,
  //   syllabusRef,
  //   instructorRef,
  //   taRef,
  //   speakersRef,
  //   faqRef,
  //   pressRef,
  // ]);

  // Add an event listener listening for scroll
  useEffect(() => {
    window.addEventListener('scroll', navHighlighter);
  });
  const sections = document.querySelectorAll('.tabs-content > div');
  console.log(sections);
  function navHighlighter() {
    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 86;
      const sectionId = current.getAttribute('id');
      console.log(sectionId);
      //console.log(document.querySelector('#sticku #' + sectionId).classList);
      /*
      - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
      - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
      */
      if (document.querySelector('#sticku')) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector('#sticku #' + sectionId)
            .classList.add('active');
        } else {
          document
            .querySelector('#sticku #' + sectionId)
            .classList.remove('active');
        }
      }
    });
  }

  return (
    <>
      <div id='wrapper' className='courses-template'>
        <div className='course-details-wrapper'>
          <div className='container custom-width'>
            <aside className='course-sidebar-details phone-hidden'>
              <ul class='tech-details'>
                <li>
                  <h6>Instructor</h6>
                  <div class='instructor-info-wrap d-flex align-items-start'>
                    <div class='user-img-wrap'>
                      <div class='img-wrap'>
                        <img src='https://campuspro-uploads.s3.us-west-2.amazonaws.com/avatars/d312102b-0910-4197-a5f7-42c0b6d57412/1603387325878.png' />
                      </div>
                    </div>
                    <div class='flex-fill'>
                      <h4>Charles Hudson</h4>
                      <p>Managing Partner at Precursor Ventures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <h6>
                    <i class='far fa-loveseat'></i>Seats Available
                  </h6>
                  <p>50</p>
                </li>
                <li>
                  <h6>
                    <i class='far fa-clock'></i>Start Date
                  </h6>
                  <p>January 11th, 2021</p>
                </li>
                <li>
                  <h6>
                    <i class='far fa-clock'></i>Course Duration
                  </h6>
                  <p>3 weeks</p>
                </li>
                <li>
                  <h6>
                    <i class='far fa-suitcase'></i>Commitment
                  </h6>
                  <p>3 hours / week</p>
                </li>
                <li>
                  <h6>
                    <i class='far fa-calendar'></i>Meet Times
                    <span class='live-badge'>Live</span>
                  </h6>
                  <p>Mon &amp; Wed (6 - 7 PM PST)</p>
                </li>
                <li>
                  <h6>
                    <i class='far fa-tags'></i>Standard Pricing
                    <i class='fas fa-question-circle' tabindex='0'></i>
                  </h6>
                  <p class='price'>$2,500</p>
                </li>
                <li>
                  <h6>
                    <i class='far fa-tags'></i>New Grad Pricing
                    <i class='fas fa-question-circle' tabindex='0'></i>
                  </h6>
                  <p class='price'>
                    $999<span>$2,500</span>
                  </p>
                </li>
              </ul>
              <button type='button' class='btn btn-primary btn-block'>
                Apply for free
              </button>
              <small>Applications open until 01/10/2021</small>
            </aside>
            <div className='course-info-details'>
              <div className='course-name'>
                <h2>PSAI 101: Pre-Seed &amp; Angel Investing Class</h2>
                <div className='course-tags'>
                  <span class='category-1'>Business / Economics</span>
                  <span class='scholarships-tag'>
                    <i class='fas fa-graduation-cap'></i>Scholarships available
                  </span>
                </div>
              </div>
              <div className='course-highlights'>
                <div className='text-wrap d-flex align-items-start flex-wrap'>
                  <FiVideo className='fal fa-video' />
                  <div className='flex-fill'>
                    <h5>Live classes</h5>
                    <p>
                      Classes are taught live on Campuswire platform. No
                      pre-recorded videos.
                    </p>
                  </div>
                </div>
                <div class='text-wrap d-flex align-items-start flex-wrap'>
                  <RiKeynoteLine className='fal fa-keynote' />
                  <div class='flex-fill'>
                    <h5>Weekly guest speakers</h5>
                    <p>
                      Learn directly from the experts themselves. Featuring
                      executives from Fortune 500 companies.
                    </p>
                  </div>
                </div>
                <div class='text-wrap d-flex align-items-start flex-wrap'>
                  <GrGlobe className='fal fa-globe-americas' />
                  <div class='flex-fill'>
                    <h5>Lifelong community</h5>
                    <p>
                      You will continue to have access to your cohort of
                      exceptional founders and investors even after the course
                      ends.
                    </p>
                  </div>
                </div>
              </div>
              <aside className='course-sidebar-details phone-visible'>
                <ul class='tech-details'>
                  <li>
                    <h6>Instructor</h6>
                    <div class='instructor-info-wrap d-flex align-items-start'>
                      <div class='user-img-wrap'>
                        <div class='img-wrap'>
                          <img src='https://campuspro-uploads.s3.us-west-2.amazonaws.com/avatars/d312102b-0910-4197-a5f7-42c0b6d57412/1603387325878.png' />
                        </div>
                      </div>
                      <div>
                        <h4>Charles Hudson</h4>
                        <p>Managing Partner at Precursor Ventures</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h6>
                      <i class='far fa-loveseat'></i>Seats Available
                    </h6>
                    <p>50</p>
                  </li>
                  <li>
                    <h6>
                      <i class='far fa-clock'></i>Start Date
                    </h6>
                    <p>January 11th, 2021</p>
                  </li>
                  <li>
                    <h6>
                      <i class='far fa-clock'></i>Course Duration
                    </h6>
                    <p>3 weeks</p>
                  </li>
                  <li>
                    <h6>
                      <i class='far fa-suitcase'></i>Commitment
                    </h6>
                    <p>3 hours / week</p>
                  </li>
                  <li>
                    <h6>
                      <i class='far fa-calendar'></i>Meet Times
                      <span class='live-badge'>Live</span>
                    </h6>
                    <p>Mon &amp; Wed (6 - 7 PM EST)</p>
                  </li>
                  <li>
                    <h6>
                      <i class='far fa-tags'></i>Standard Pricing
                      <i class='fas fa-question-circle' tabindex='0'></i>
                    </h6>
                    <p class='price'>$2,500</p>
                  </li>
                  <li>
                    <h6>
                      <i class='far fa-tags'></i>New Grad Pricing
                      <i class='fas fa-question-circle' tabindex='0'></i>
                    </h6>
                    <p class='price'>
                      $999<span>$2,500</span>
                    </p>
                  </li>
                </ul>
                <button type='button' class='btn btn-primary btn-block'>
                  Apply for free
                </button>
                <small>Applications open until 01/10/2021</small>
              </aside>
              <div id='navbar' class='sticky-tabs-wrap'>
                <ul class='custom-tabs'>
                  <li
                    class=''
                    onClick={() => {
                      scrollTo(aboutRef.current);
                    }}
                  >
                    About
                  </li>
                  <li
                    class=''
                    onClick={() => {
                      scrollTo(syllabusRef.current);
                    }}
                  >
                    Syllabus
                  </li>
                  <li
                    class=''
                    onClick={() => {
                      scrollTo(instructorRef.current);
                    }}
                  >
                    Instructor
                  </li>
                  <li
                    class=''
                    onClick={() => {
                      scrollTo(taRef.current);
                    }}
                  >
                    TAs
                  </li>
                  <li
                    class=''
                    onClick={() => {
                      scrollTo(speakersRef.current);
                    }}
                  >
                    Speakers
                  </li>
                  <li
                    class=''
                    onClick={() => {
                      scrollTo(faqRef.current);
                    }}
                  >
                    FAQ
                  </li>
                  <li
                    class=''
                    onClick={() => {
                      scrollTo(pressRef.current);
                    }}
                  >
                    Press
                  </li>
                </ul>
              </div>
              {showSticky ? stickyNav : null}
              {/* <div class='sticky-tabs-wrap sticky'>
                <h4>PSAI 101: Pre-Seed &amp; Angel Investing Class</h4>
                <ul class='custom-tabs'>
                  <li class='active'>About</li>
                  <li class=''>Syllabus</li>
                  <li class=''>Instructor</li>
                  <li class=''>TAs</li>
                  <li class=''>Speakers</li>
                  <li class=''>FAQ</li>
                  <li class=''>Press</li>
                </ul>
              </div> */}
              <div className='tabs-content'>
                <div id='about' className='course-intro' ref={aboutRef}>
                  <div class='section-title'>
                    <a href='/courses/GC5315654#about'>About this course</a>
                  </div>
                  <div class='instructor-bio'>
                    <p>
                      The Pre-Seed and Angel Investing Masterclass is a 4-week
                      course designed to equip angel investors and aspiring
                      venture capitalists with both the{' '}
                      <strong>hard and soft skills</strong> and{' '}
                      <strong>professional networks</strong> required to
                      identify, evaluate and invest in the startups building the
                      future.
                    </p>
                    <p>
                      This course is offered live with{' '}
                      <strong>one weekly lecture</strong> with industry-leading
                      guest speakers and <strong>one weekly seminar</strong>{' '}
                      during which students will engage in lively discussions
                      around course content.
                    </p>
                    <p>Examples of the issues that we will cover are:</p>
                    <ul>
                      <li>Building elite deal flow pipeline</li>
                      <li>Recognizing exceptional founders</li>
                      <li>Investing in diverse founders</li>
                      <li>Questions top investors ask founders</li>
                      <li>Building conviction with little data</li>
                      <li>Negotiating investment terms</li>
                      <li>Conducting due diligence</li>
                    </ul>
                  </div>
                </div>
                <div
                  id='syllabus'
                  className='course-syllabus'
                  ref={syllabusRef}
                >
                  <div class='section-title'>
                    <a href='/courses/GC5315654#syllabus'>Syllabus</a>
                  </div>
                  <div class='syllabus-outline'>
                    <h6>Week 1</h6>
                    <p>
                      <p>
                        <em>
                          <strong>
                            Introduction: Pre-Seed &amp; Angel Investing
                          </strong>
                        </em>{' '}
                        — understanding the process by which early stage
                        investors fund venture-scale businesses.
                      </p>
                    </p>
                  </div>
                  <div class='syllabus-outline'>
                    <h6>Week 2</h6>
                    <p>
                      <p>
                        <em>
                          <strong>Exceptional Founders</strong>
                        </em>{' '}
                        — evaluating the steps elite investors take to secure
                        access to the best founders.
                      </p>
                    </p>
                  </div>
                  <div class='syllabus-outline'>
                    <h6>Week 3</h6>
                    <p>
                      <p>
                        <em>
                          <strong>Building Conviction</strong>
                        </em>{' '}
                        — identifying the key traits of a founder, or elements
                        of a startup, that elite investors look for to get to
                        'yes'.
                      </p>
                    </p>
                  </div>
                  <div class='syllabus-outline'>
                    <h6>Week 4</h6>
                    <p>
                      <p>
                        <em>
                          <strong>Closing the Deal</strong>
                        </em>{' '}
                        — understanding how elite investors approach negotiating
                        deal terms, deciding how much to invest, supporting a
                        deal to close and competing for access to the hottest
                        deals.
                      </p>
                    </p>
                  </div>
                </div>
                <div
                  id='instructor'
                  className='instructor-intro'
                  ref={instructorRef}
                >
                  <div class='section-title'>
                    <a href='/courses/GC5315654#instructor'>
                      Meet your instructor
                    </a>
                  </div>
                  <div class='instructor-intro-bio clearfix'>
                    <img
                      src='https://campuspro-uploads.s3.us-west-2.amazonaws.com/avatars/d312102b-0910-4197-a5f7-42c0b6d57412/1603387325878.png'
                      class='img-fluid float-left'
                    />
                    <div class='instructor-bio'>
                      <p>
                        Charles Hudson is the Managing Partner at Precursor
                        Ventures, a classic seed stage investment firm based out
                        of San Francisco, CA, and a Stanford University
                        Lecturer. Precursor seeks to invest in a company's first
                        round of institutional investment and focuses on
                        investments in B2B, B2C software and services, and
                        connected hardware.
                      </p>
                      <p>
                        Prior to launching Precursor, Charles Hudson was a
                        Partner with SoftTech VC, one of the most active seed
                        stage investors in Internet and mobile startups. He
                        focused on identifying investment opportunities in
                        mobile infrastructure, mobile applications, and
                        marketplaces. He was also the Co-Founder and CEO of
                        Bionic Panda Games, an Android-focused mobile games
                        startup.
                      </p>
                      <p>
                        Charles also spent several years working at In-Q-Tel,
                        the strategic venture capital group for the Central
                        Intelligence Agency. While at In-Q-Tel, he focused on
                        identifying investment opportunities that could deliver
                        significant value to the CIA and the commercial market
                        in both the short and long term. He holds an MBA from
                        the Stanford Graduate School of Business and a B.A. in
                        Economics and Spanish from Stanford University.
                      </p>
                    </div>
                  </div>
                </div>
                <div id='ta' className='tas-info-wrapper' ref={taRef}>
                  <div class='section-title'>
                    <a href='/courses/GC5315654#assistants'>
                      Teaching assistants
                    </a>
                  </div>
                  <div class='d-flex flex-wrap'>
                    <div class='tas-wrap'>
                      <div class='ta-img'>
                        <img src='https://campuspro-uploads.s3.us-west-2.amazonaws.com/avatars/863b2ed0-29a3-4873-895e-fcc86023cab2/1591680018455.png' />
                      </div>
                      <div class='ta-info'>
                        <h5>Tade Oyerinde</h5>
                        <p>Founder &amp; CEO at Campuswire</p>
                        <div class='ta-social-links'>
                          <a href='https://www.linkedin.com/in/tadeoyerinde/'>
                            <i class='fab fa-linkedin'></i>
                          </a>
                          <a href='https://twitter.com/tadeoyerinde'>
                            <i class='fab fa-twitter'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id='speakers'
                  className='speakers-info-wrapper'
                  ref={speakersRef}
                >
                  <div className='section-title'>
                    <a href='/courses/GC5315654#speakers'>Guest Speakers</a>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='speakers-wrap d-flex align-items-start'>
                        <div className='user-img-wrap'>
                          <div className='img-wrap'>
                            <img src='https://s3-us-west-2.amazonaws.com/campuswire-default-images/user-cyan.png' />
                          </div>
                        </div>
                        <div className='speaker-info'>
                          <p style={{ marginTop: '21px' }}>To be announced</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='speakers-wrap d-flex align-items-start'>
                        <div className='user-img-wrap'>
                          <div className='img-wrap'>
                            <img src='https://s3-us-west-2.amazonaws.com/campuswire-default-images/user-cyan.png' />
                          </div>
                        </div>
                        <div className='speaker-info'>
                          <p style={{ marginTop: '21px' }}>To be announced</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id='faq' class='course-faqs' ref={faqRef}>
                  <div class='section-title'>
                    <a href='/courses/GC5315654#faq'>FAQ</a>
                  </div>
                  <div class='faq instructor-bio'>
                    <h5>What will I learn in this course?</h5>
                    <p>
                      We designed this course to help angel investors build the
                      professional networks and master the hard and soft skills
                      critical to achieving success investing in early stage
                      startups.
                    </p>
                    <p>
                      Lectures, seminar, and guest lectures will cover a wide
                      breadth of topics (depending on the questions you and your
                      classmates ask), but you’ll have mastered these key
                      topics:
                    </p>
                    <ul>
                      <li>Building elite deal flow pipeline</li>
                      <li>Recognizing exceptional founders</li>
                      <li>Investing in diverse founders</li>
                      <li>Questions top investors ask founders</li>
                      <li>Building conviction with little data</li>
                      <li>Negotiating investment terms</li>
                      <li>Conducting Due Diligence</li>
                    </ul>
                    <h5>What’s the structure of the course?</h5>
                    <p>
                      This course consists of weekly live lectures delivered by
                      the instructor and weekly seminars hosted by teaching
                      assistants (each lecture and seminar session is 50
                      minutes).
                    </p>
                    <p>
                      The course will have an instructor, 3 guest speakers, a
                      head TA, and an additional TA for each 25 students
                      enrolled.
                    </p>
                    <p>All sessions and content are hosted on Campuswire.</p>
                    <h5>So this is a live course?</h5>
                    <p>
                      Yes -- everything happening in this course is live with
                      your instructor, coursemates and TAs. All sessions will be
                      recorded but all students are expected to participate
                      live.
                    </p>
                    <h5>Am I able to interact with my instructor?</h5>
                    <p>
                      Yes -- you’ll be able to ask Charles questions during and
                      after lectures, and you’ll have plenty of time to meet
                      with your TAs.
                    </p>
                    <h5>Is there homework?</h5>
                    <p>
                      No -- to get the most out of the course, you should
                      prepare questions ahead of each lecture and seminar and
                      bring any topics you’d like to discuss, but there won’t be
                      any formal homework or assignments.
                    </p>
                    <h5>What happens after I finish the class?</h5>
                    <p>
                      After the course ends you will retain indefinite access to
                      the private course social network on Campuswire as well as
                      to all class materials.
                    </p>
                    <h5>Who am I learning from?</h5>
                    <p>
                      Your instructor will be Charles Hudson, the Managing
                      Partner at Precursor Ventures, a classic seed stage
                      investment firm based out of San Francisco, CA, and a
                      Stanford University Lecturer.
                    </p>
                    <p>
                      Prior to launching Precursor, Charles Hudson was a Partner
                      with SoftTech VC, one of the most active seed stage
                      investors in Internet and mobile startups. Charles also
                      spent several years working at In-Q-Tel, the strategic
                      venture capital group for the Central Intelligence Agency.
                      He holds an MBA from the Stanford Graduate School of
                      Business and a B.A. in Economics and Spanish from Stanford
                      University. Your TAs will be a team of current employees
                      at elite VC firms and startup founders. Your Head TA will
                      be Tade Oyerinde, founder of Campuswire.
                    </p>
                    <h5>Who am I learning with?</h5>
                    <p>
                      Your classmates will be the most qualified and ambitious
                      current and future angel investors, and aspiring venture
                      capitalists, who we’ve selected from the application pool.
                    </p>
                    <p>
                      This includes experienced angel investors looking to hone
                      their skills and expand their networks, newly minted
                      angels, current VCs planning their move into the world of
                      angel investing, aspiring VCs, and startup founders
                      looking to begin angel investing.
                    </p>
                    <h5>Are scholarships available?</h5>
                    <p>
                      Yes, we’re offering a limited number of full and half
                      scholarships for this class.
                    </p>
                    <p>
                      These scholarships are available to recent graduates and
                      current graduate students who demonstrate financial need
                      or are part of an underrepresented group in venture
                      investing.
                    </p>
                    <p>
                      If you meet those criteria, submit your application to the
                      class and then complete our scholarship application form{' '}
                      <a
                        href='https://campuswire.typeform.com/to/kwTgyXLp'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      . Feel free to reach out to{' '}
                      <a
                        href='mailto:brian@campuswire.com'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        brian@campuswire.com
                      </a>{' '}
                      with any questions.
                    </p>
                    <h5>Why are we charging money?</h5>
                    <p>
                      We want to continue building Campuswire Coures and offer
                      more great classes in the future -- to do that, we've got
                      to charge money for courses so we can continue building.
                    </p>
                    <p>
                      The tuition fee also helps us give back. We're donating
                      25% of proceeds from the course to BLCK VC (
                      <a
                        href='https://www.blckvc.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        https://www.blckvc.com/
                      </a>
                      ) to increase Black representation in the investing world.
                    </p>
                    <h5>Why do we have two pricing tiers?</h5>
                    <p>
                      Accessibility is important to us -- we want to make sure
                      our course is accessible to as many students.
                    </p>
                    <p>
                      Charging a higher price for established angel investors
                      and for experienced professionals looking to move into
                      angel investing helps us offer a lower price to future and
                      up-and-coming investors who wouldn't have access at a
                      higher price.
                    </p>
                  </div>
                </div>
                <div id='press' class='media-partners-wrapper' ref={pressRef}>
                  <div class='section-title'>
                    <a href='/courses/GC5315654#press'>As seen on</a>
                  </div>
                  <ul class='media-partners-list d-flex flex-wrap align-items-center'>
                    <li>
                      <a
                        href='https://campustechnology.com/articles/2019/09/12/campuswire-update-streamlines-course-communications.aspx'
                        target='_blank'
                      >
                        <img
                          alt='campus_technology'
                          src='https://static.campuswire.com/images/campus-technology.svg'
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.edsurge.com/news/2019-10-30-campuswire-raises-3-6-million-to-improve-online-class-discussions'
                        target='_blank'
                      >
                        <img
                          alt='edsurge'
                          src='https://static.campuswire.com/images/edsurge.svg'
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://techcrunch.com/2020/11/11/as-edtech-crowds-up-campuswire-bets-big-on-real-time-learning/'
                        target='_blank'
                      >
                        <img
                          alt='techcrunch'
                          src='https://static.campuswire.com/images/techcrunch.svg'
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container custom-width d-block'>
        <hr class='separator md-width'></hr>
        <div className='similar-courses-wrapper'>
          <h4 class='text-center'>You might also like:</h4>
          <p class='text-center'>Choose the course that is right for you</p>
          <row>
            <div class='col-lg-4 col-md-6'>
              <div class='course-wrap compact disabled'>
                <div class='course-img'>
                  <img src='https://images.unsplash.com/photo-1534293507278-19b2539423f2?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80' />
                </div>
                <div class='course-info'>
                  <h4>Machine Learning Bootcamp</h4>
                  <div class='intructor-info'>
                    <div class='user-img-wrap'>
                      <div class='img-wrap'>
                        <img src='https://s3-us-west-2.amazonaws.com/campuswire-default-images/user-blue.png' />
                      </div>
                    </div>
                    <p>TBA</p>
                  </div>
                  <div class='course-price'>Coming soon</div>
                </div>
              </div>
            </div>
          </row>
        </div>
      </div>
    </>
  );
};

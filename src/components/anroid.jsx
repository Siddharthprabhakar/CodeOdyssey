import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './android.css';
import image from '../images/android.svg';
import cupcake from'../images/cupcake.png'
import jelly from '../images/jelly.png'
import oreo from '../images/oreo.png'
import lol from '../images/lol.png'
import a10 from '../images/andy10.svg'
import a14d from '../images/a14d.svg'
import andy from '../images/andy.svg'
import mvvm from '../images/mvvm.png'
import mvi from '../images/mvv.png'
import mvp from '../images/mvparch.png'

//usage of useState hook
const AndroidMap = () => {
  const [isMvvcVisible, setIsMvvcVisible] = useState(false);
  const [isMviVisible, setIsMviVisible] = useState(false);
  const [isMvpVisible, setIsMvpVisible] = useState(false);

  const handleMvvcMouseEnter = () => {
    setIsMvvcVisible(true);
  };

  const handleMvvcMouseLeave = () => {
    setIsMvvcVisible(false);
  };

  const handleMviMouseEnter = () => {
    setIsMviVisible(true);
  };

  const handleMviMouseLeave = () => {
    setIsMviVisible(false);
  };

  const handleMvpMouseEnter = () => {
    setIsMvpVisible(true);
  };

  const handleMvpMouseLeave = () => {
    setIsMvpVisible(false);
  };

  return (
      <div className="andymind-map">
        <div className="textox">Android <br/> Development</div>
        <div className="alienbox">
                <img src={andy} alt="Android"/>
            </div>

        <div className="line"></div>
        <div className={`android-logo ${isMvvcVisible ? 'mvvc-visible' : ''}`}>
          <div className="rollbox">
                <img src={image} alt="Android" height="100px"/>
            </div>
        </div>

        <div className='mvvmpicbox'>
            <img src={mvvm} alt="mvvm"/>
        </div>

        <div className='mvipicbox'>
            <img src={mvi} alt="mvvm"/>
            MVI Architecture with Android
        </div>

        <div className='mvppicbox'>
            <img src={mvp} alt="mvvm"/>
            Android MVP — Realtime Architecture 
            with RxJava and Socket.IO 
        </div>
        
        
          <div className="lanbox">
          Learn any programming language 
          <div className="lmbranch">
            <div className="leftbranch">
                <div className="jbranch">
                    <div className="jbox">
                     JAVA
                    </div>
                    <div className="xbox">
                      XML
                    </div>
                </div>
                {/* <div className="rubybranch">
                <div className="phpbox">
                      DART
                    </div>
                    <div className="javabox">
                      C#
                    </div>
                </div> */}
                <div className="cbranch">
                <div className="jbox">
                     C# 
                    </div>
                    <div className="xbox">
                      C++
                    </div>
                </div>
            </div>
          </div>
          <div className="rmbranch">
            <div className="rightbranch">
              <div className="kbranch">
              <div className="kbox">
                      KOTLIN
                    </div>
              </div>
              {/* <div className="psbranch">
              <div className="pybox">
              POWERSHELL
                    </div>
              </div> */}
              <div className="dbranch">
              <div className="kbox">
              DART
                    </div>
              </div>
            </div>
          </div>
          </div>

        <div className="jetbox">
        ANDROID JETPACK
            <div className="jetbranchleft">
            
              <div className="appbranch">
                <div className="appbox">
                {/* <img src={aws} alt="aws" /> */}
                App Compat library
                </div>
              </div>

              <div className="navbranch">
                <div className="navbox">
                {/* <img src={digital} alt="digitalocean" /> */}
                Navigation
                </div>
              </div>

              <div className="pgbranch">
                <div className="pgbox">
                  {/* <img src={ovh} alt="OVHCloud"/> */}
                  Paging
                </div>
              </div>

              <div className="slicebranch">
                <div className="slicebox">
                  {/* <img src={oracle} alt="Oracle"/> */}
                  Slices
                </div>
              </div>

            </div>
            <div className="jetbranchright"></div>

            <div className="androidbranch">
              <div className="aktxbox">
                {/* <img src={gcloud} alt="googlecloud"/> */}
                Android Ktx
              </div>
            </div>

            <div className="workbranch">
              <div className="workbox">
                {/* <img src={azure} alt="Azure"/> */}
                Work Manager
              </div>
            </div>

            <div className="animebranch">
              <div className="animebox">
              {/* <img src={tencent} alt="Tencent Cloud"/> */}
              Animation And Transitions
              </div>
            </div>

            <div className="compbranch">
              <div className="compbox">
              {/* <img src={ibm} alt=" International Business Machines(IBM)" /> */}
              Architecture
              Components
              </div>
            </div>
        </div>

        <div className="abox">
          ANDROID ARCHITECTURE
          <div className="albranch">
            <div>
            <div className="mbox" onMouseEnter={handleMvvcMouseEnter} onMouseLeave={handleMvvcMouseLeave}>
               Model-View-ViewModel (MVVM)
              {isMvvcVisible && (
                <div className="mvvmbox">
                MVVM separates an application into Model (data and logic), View (UI), and ViewModel (presentation logic) components. 
                <hr/>An example could be a weather app where the Model fetches weather data, the View displays it, and the ViewModel formats and manages the data for the UI.
                </div>
              )}
            </div>
            </div>
            
            <div className="vbranch">
            <div className="vbox" onMouseEnter={handleMviMouseEnter} onMouseLeave={handleMviMouseLeave}>
            Model-View-Intent (MVI)
                {isMviVisible && (
                <div className="mvibox">
                MVI breaks down an app into Model (data and logic), View (UI), and Intent (user actions) components.<hr/> Example- In a to-do list app, the Model handles tasks, the View displays them, and Intents represent user actions like adding or deleting tasks.
                </div>
              )}
                </div>
              </div>
          </div>
          <div className='rcsmbranch'>
            <div className="pbranch">
              <div className="pbox"  onMouseEnter={handleMvpMouseEnter} onMouseLeave={handleMvpMouseLeave}>
              Model-View-Presenter (MVP)
              {isMvpVisible && (
              <div className="mvpbox">
             MVP divides an app into Model (data and logic), View (UI), and Presenter (presentation logic) components.<hr/>Example- For an email client, the Model manages email data, the View displays emails, and the Presenter formats data and handles user interactions.
              </div>
              )}
              </div>
            </div>
          </div>
        </div>

        <div className="versionbox">
        ANDROID POPULAR VERSIONS
        <div className="lebranch">
           <div className="msgofbranch">
                <div className="msgofbox">
                Android 1.5 Cupcake
                <div className="pic">
                <img src={cupcake} alt="cupcake"/>
                </div>
                
               
                </div>
            </div>
            <div className="depbranch">
                <div className="depbox">
                Android 4.1 Jelly Bean
                <div className="pic">
                <img src={jelly} alt="cupcake"/>
                    </div>
                </div>
            </div>
            <div className="hypbranch">
              <div className="hypbox">
              Android 8 Oreo
              <div className="pic">
              <img src={oreo} alt="cupcake"/>
                    </div>
              </div>
            </div> 
        </div>
        <div className="rebranch">
         <div className="netbranch">
               <div className="netbox">
               Android 5 Lollipop
                  <div className="pic">
                  <img src={lol} alt="cupcake"/>
                  </div>
                </div>
        </div>
        <div className="servebranch">
          <div className="servebox">
            Android 10
            <div className="pic">
            <img src={a10} alt="cupcake"/>
            </div>
          </div>
        </div>
        <div className="storebranch">
          <div className="storebox">
            Android 14
            <div className="pic">
            <img src={a14d} alt="cupcake"/>
            </div>
          </div> 
          </div> 
        </div>
        </div>

        <div className="testingbox">
          SECURITY TESTING
          <div className="ltestbranch">
            <div className="fbranch">
                  <div className="fbox">
                  Functional Testing
                  <div className="adescription">
                  Purpose: To verify if the application functions as intended.<hr/>
                 Focus: Testing specific features and functionalities to ensure they work correctly.
                  </div>
                  </div>
            </div>
            <div className="ptbranch">
                  <div className="ptbox">
                  Performance Testing
                    <div className="adescription">
                    Purpose: To evaluate how well the application performs under various conditions.<hr/>
Focus: Assessing speed, responsiveness, and resource utilization to ensure efficient operation.
                    </div>
                  </div>
            </div>
          </div>
          <div className="rtestbranch">
          <div className="atbranch">
            <div className="atbox">
            Accessibility Testing
              <div className="adescription">
              Purpose: To ensure the application is usable by people with disabilities.<hr/>
            Focus: Checking if the app is compatible with screen readers, keyboard navigation, and other accessibility tools..
              </div>
            </div>

          </div>
          <div className="ctbranch">
            <div className="ctbox">
            Compatibility Testing
                <div className="adescription">
                Purpose: To confirm the application works across different devices and software environments.<hr/>
Focus: Ensuring compatibility with various browsers, devices, operating systems, and API versions.
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lastbox">
          KEEP PRACTICING & IMPROVING
          <br />
          <a href="https://developer.android.com/courses" target="_blank" rel="noopener noreferrer">Android for Developers</a>
          <br />
          <a href="https://www.tutorialspoint.com/android/index.htm" target="_blank" rel="noopener noreferrer">Android Basics</a>
          <br />
          <a href="https://developer.android.com/codelabs/basic-android-kotlin-compose-first-app" target="_blank" rel="noopener noreferrer">Creating first Android App</a>
      </div>
    </div>
  );
};

export default AndroidMap;

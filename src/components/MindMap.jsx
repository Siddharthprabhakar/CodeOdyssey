import { useState, useEffect } from 'react';
import '../App.css';
import topics from './topicData'
import ProgressCircles from './ProgressCircles';
import LoginOverlay from './LoginOverlay';
import Offcanvas from 'react-bootstrap/Offcanvas';
import image from '../images/Cloud.png';
import aws from'../images/AWS.png'
import digital from '../images/DigitalOcean.png'
import ovh from '../images/OVH.png'
import oracle from '../images/Oracle.png'
import gcloud from '../images/Google.png'
import azure from '../images/Azuree.png'
import tencent from '../images/tencent.png'
import ibm from '../images/IBM.png'
import iaas from '../images/iaas.jpg'
import paas from '../images/paas.jpg'
import saas from '../images/saas.jpg'

function SidebarContent({ data, onHide, onPrevious, onNext, selectedTopicIndex }) {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(selectedTopicIndex);
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    setCurrentTopicIndex(selectedTopicIndex);
  }, [selectedTopicIndex]);

  const handlePreviousTopic = () => {
    if (currentTopicIndex > 0) {
      onPrevious(); // Call the parent component's onPrevious function

      setTimeout(() => {
        setIsLoading(false); // Set loading state to false when content is loaded
      }, 3000); // Assuming 3 seconds loading time for demonstration
    }
  };

  const handleNextTopic = () => {
    if (currentTopicIndex < topics.length - 1) {
      setIsLoading(true); // Set loading state to true when "Next" button is clicked
      onNext(); // Call the parent component's onNext function

      // Simulate loading time (You can replace this with actual loading logic)
      setTimeout(() => {
        setIsLoading(false); // Set loading state to false when content is loaded
      }, 3000); // Assuming 3 seconds loading time for demonstration
    }
  };
  

  return (
    <>
    {/* {topics.map((topic, index) => (
        <div key={index} className="topic-box" onClick={() => handleBoxClick(index)}>
          {topic.title}
        </div>
      ))} */}
      <Offcanvas show={data !== null} onHide={onHide} backdrop="static" style={{
        color: "#1E90FF",
        transition:' transform 0.6s ease',
      }}>
         
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{data?.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar">
           {/* Preloader - Conditionally rendered when isLoading is true
           {isLoading && <div className="preloader">Loading...</div>} */}

          {/* Conditional rendering for description */}
          {data && data.description && (
            <p className="description">{data.description}</p>
          )}

            {/* Conditional rendering for main image */}
            {data && data.images && data.images.main && (
              <img src={data.images.main} alt="Main" />
            )}

            {/* Conditional rendering for related images */}
            {data && data.images && data.images.related && (
              <div className="related-images">
                {data.images.related.map((image, index) => (
                  <img key={index} src={image} alt={`Related ${index}`} />
                ))}
              </div>
            )}
            
            {/* Conditional rendering for links */}
            {data && data.learnMoreLinks && data.learnMoreLinks.length > 0 && (
              <div className="learnMoreLinks">
                {data.learnMoreLinks.map((link, index) => (
                  <div className="link" key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.title}
                    </a>
                  </div>
                ))}
              </div>
            )}

            {/* Conditional rendering for links */}
            {data && data.links && data.links.wikipedia && (
              <div className="link">
                <a href={data.links.wikipedia} target="_blank" rel="noopener noreferrer">
                  Wikipedia
                </a>
              </div>
            )}

            {/* Conditional rendering for links */}
            {data && data.links && data.links.wikipedia && (
              <div className="link">
                <a href={data.links.learnMore} target="_blank" rel="noopener noreferrer">
                learnMore
                </a>
              </div>
            )}

            {data && data.links && data.links.tutorial && (
              <div className="link">
                <a href={data.links.tutorial} target="_blank" rel="noopener noreferrer">
                  Tutorial
                </a>
              </div>
            )}

            {/* Conditional rendering for videos */}
            {data && data.videos && data.videos.length > 0 && (
              <div className="videos">
                {data.videos.map((video, index) => (
                 <iframe
                 key={index}
                 title={`Video ${index}`}
                 width="100%"  // Set the width to 100% to fit the sidebar
                 height="315"
                 src={video}
                 frameBorder="0"
                 allowFullScreen
               ></iframe>
               ))}
              </div>
            )} 
            <div className="navigation-buttons">
              <button onClick={handlePreviousTopic} disabled={selectedTopicIndex === 0}>
                Back
              </button>
            <button
                onClick={handleNextTopic}
                disabled={selectedTopicIndex === topics.length - 1}
              >
                Next
            </button>
          </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const MindMap = () => {
  const [isIaasDescVisible, setIsIaasDescVisible] = useState(false);
  const [isPaasDescVisible, setIsPaasDescVisible] = useState(false);
  const [isSaasDescVisible, setIsSaasDescVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(null);
  const [showOverlay, setShowOverlay] = useState(true);

  const handlePreviousTopic = () => {
    if (selectedTopicIndex > 0) {
      setSelectedTopicIndex(selectedTopicIndex - 1);
      setSelectedTopic(topics[selectedTopicIndex - 1]); // Update selected topic
    }
  };

  const handleNextTopic = () => {
    if (selectedTopicIndex < topics.length - 1) {
      setSelectedTopicIndex(selectedTopicIndex + 1);
      setSelectedTopic(topics[selectedTopicIndex + 1]); // Update selected topic
    }
  };

  const handleBoxClick = (topicData) => {
    setSelectedTopic(topicData);
    setShowSidebar(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowOverlay(false);
  };
  

  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setSelectedTopic(null);
  };

  const handleIaasMouseEnter = () => {
    setIsIaasDescVisible(true);
  };

  const handleIaasMouseLeave = () => {
    setIsIaasDescVisible(false);
  };

  const handlePaasMouseEnter = () => {
    setIsPaasDescVisible(true);
  };

  const handlePaasMouseLeave = () => {
    setIsPaasDescVisible(false);
  };

  const handleSaasMouseEnter = () => {
    setIsSaasDescVisible(true);
  };

  const handleSaasMouseLeave = () => {
    setIsSaasDescVisible(false);
  };

  useEffect(() => {
    if (showOverlay) {
      document.body.classList.add('overlay-visible');
    } else {
      document.body.classList.remove('overlay-visible');
    }
  }, [showOverlay]);

  return (
    <div className="mind-map">
    {showSidebar && selectedTopicIndex !== null && (
      <SidebarContent
        data={topics[selectedTopicIndex]}
        onHide={handleCloseSidebar}
        onPrevious={handlePreviousTopic}
        onNext={handleNextTopic}
      />
    )}
    {showOverlay && !isLoggedIn && <LoginOverlay onLogin={handleLogin} />}
    {isLoggedIn && (
      <>
       <div className="progress-circles-container" style={{ right: "0px"}}>
      <ProgressCircles /> 
      </div>
      <div className='mind-map'>
        <div className="cloudtextbox">Cloud Computing</div>
        

        <div class="line"></div>
        <div className="cloudsquare-box">
            <img src={image} alt="Cloud" />
        </div>
        
          <div className="langbox">
          Learn any programming language 
          <div className="lminbranch">
            <div className="lbranch">
                <div className="phpbranch">
                <div className="phpbox" onClick={() => handleBoxClick(topics[0])}>
                    PHP
                  </div>
                  <div className="javabox" onClick={() => handleBoxClick(topics[1])}>
                    JAVA
                  </div>
                </div>
                <div className="rubybranch">
                  <div className="phpbox" onClick={() => handleBoxClick(topics[2])}>
                    RUBY
                  </div>
                  <div className="javabox" onClick={() => handleBoxClick(topics[3])}>
                      .NET
                    </div>
                </div>
                <div className="golangbranch">
                <div className="phpbox" onClick={() => handleBoxClick(topics[4])}>
                      GOLANG
                    </div>
                    <div className="javabox" onClick={() => handleBoxClick(topics[5])}>
                      JAVASCRIPT
                    </div>
                </div>
            </div>
          </div>
          <div className="rminbranch">
            <div className="rbranch">
              <div className="pybranch">
              <div className="pybox" onClick={() => handleBoxClick(topics[6])}>
                      PYTHON
                    </div>
              </div>
              <div className="psbranch">
              <div className="pybox" onClick={() => handleBoxClick(topics[7])}>
              POWERSHELL
                    </div>
              </div>
              <div className="bashbranch">
              <div className="pybox" onClick={() => handleBoxClick(topics[8])}>
              BASH/SHELL SCRIPTING
                    </div>
              </div>
            </div>
          </div>
          </div>

        <div className="servicesbox">
        CLOUD SERVICE PROVIDERS
            <div className="servicebranchleft">
            
            <div className="awsbranch">
              <div className="awsbox" onClick={() => handleBoxClick(topics[9])}>
                <img src={aws} alt="aws" />
              </div>
              </div>

              <div className="digitaloceanbranch">
                <div className="digitaloceanbox" onClick={() => handleBoxClick(topics[10])}>
                <img src={digital} alt="digitalocean" />
                </div>
              </div>

              <div className="ovhbranch">
                <div className="ovhbox" onClick={() => handleBoxClick(topics[11])}>
                  <img src={ovh} alt="OVHCloud"/>
                </div>
              </div>

              <div className="oraclebranch">
                <div className="Oraclebox" onClick={() => handleBoxClick(topics[12])}>
                  <img src={oracle} alt="Oracle"/>
                </div>
              </div>

            </div>
            <div className="servicebranchright"></div>

            <div className="gcloudbranch">
              <div className="gcloudbox" onClick={() => handleBoxClick(topics[13])}>
                <img src={gcloud} alt="googlecloud"/>
              </div>
            </div>

            <div className="azurebranch">
              <div className="azurebox" onClick={() => handleBoxClick(topics[14])}>
                <img src={azure} alt="Azure"/>
              </div>
            </div>

            <div className="tencentbranch">
              <div className="tencentbox" onClick={() => handleBoxClick(topics[15])}>
              <img src={tencent} alt="Tencent Cloud"/>
              </div>
            </div>

            <div className="ibmbranch">
              <div className="ibmbox" onClick={() => handleBoxClick(topics[16])}>
              <img src={ibm} alt=" International Business Machines(IBM)" />
              </div>
            </div>
        </div>

        <div className='iaaspicbox'>
            <img src={iaas} alt="IaaS"/>
        </div>

        <div className='paaspicbox'>
            <img src={paas} alt="PaaS"/>
        </div>

        <div className='saaspicbox'>
            <img src={saas} alt="SaaS"/>
        </div>

        <div className="csmbox">
          CLOUD SERVICE MODELS
          <div className="lcsmbranch">
            <div>
            <div className="iaasbox" onMouseEnter={handleIaasMouseEnter} onMouseLeave={handleIaasMouseLeave}  onClick={() => handleBoxClick(topics[17])}>
              Infrastructure as a Service (IaaS)
              {isIaasDescVisible && (
                <div className="iaasdescbox">
                  IaaS provides virtualized computing resources over the internet.
                  Users can provision and manage virtual machines (VMs), storage, and networking resources.
                  <hr />
                  Example: Amazon Web Services (AWS) Elastic Compute Cloud (EC2) allows users to launch and
                  manage VM instances. Users can choose the operating system, instance type, and storage to
                  create customized virtual machines.
                </div>
              )}
            </div>
            </div>
            
            <div className="paasbranch">
            <div className="paasbox" onMouseEnter={handlePaasMouseEnter} onMouseLeave={handlePaasMouseLeave} onClick={() => handleBoxClick(topics[18])}>
                Platform as a Service <br/> (PaaS)
                {isPaasDescVisible && (
                <div className="paasdescbox">
                PaaS provides a platform that includes infrastructure, runtime environment, and development
                 tools to build, deploy, and manage applications. Developers focus on coding while the 
                 platform handles underlying infrastructure.
                 <hr/>
                Example: Google App Engine is a PaaS offering. Developers can write code in languages like
                 Python, Java, or Node.js and deploy applications without worrying about server provisioning. 
                 Google App Engine automatically manages the infrastructure.
                </div>
              )}
                </div>
              </div>
          </div>
          <div className='rcsmbranch'>
            <div className="saasbranch">
              <div className="saasbox"  onMouseEnter={handleSaasMouseEnter} onMouseLeave={handleSaasMouseLeave} onClick={() => handleBoxClick(topics[19])}>
              Software as a Service (SaaS)
              {isSaasDescVisible && (
              <div className="saasdescbox">
              SaaS delivers software applications over the internet on a subscription basis. Users can access
               and use software without installation or maintenance efforts.
               <hr/>
              Example: Salesforce is a widely used SaaS CRM (Customer Relationship Management) platform. 
              Users can log in via a web browser to manage customer relationships, sales, and analytics. 
              They don't need to install any software on their devices.
              </div>
              )}
              </div>
            </div>
          </div>
        </div>

        <div className="cloudinfrabox">
        CLOUD COMPUTING INFRASTRUCTURE
        <div className="lcloudinfrabranch">
           <div className="mgsoftbranch">
                <div className="mgsoftbox"  onClick={() => handleBoxClick(topics[20])}>
                MANAGEMENT SOFTWARE
                <div className="description">
                Management software in cloud helps control and optimize digital resources remotely, ensuring efficient use and smooth operation of online services
                    </div>
                </div>
            </div>
            <div className="deploybranch">
                <div className="deploybox" onClick={() => handleBoxClick(topics[21])}>
                DEPLOYMENT SOFTWARE
                <div className="description">
                Deployment software simplifies putting apps on the cloud. It automates the process, ensuring apps work well, integrate smoothly, and are easily accessible online.
                    </div>
                </div>
            </div>
            <div className="hyperbranch">
              <div className="hyperbox"  onClick={() => handleBoxClick(topics[22])}>
              HYPERVISOR
              <div className="description">
              Hypervisor is a firmware or low-level program that acts as a Virtual Machine Manager. It allows to share the single physical instance of cloud resources between several tenants.
                    </div>
              </div>
            </div> 
        </div>
        <div className="rcloudinfrabranch">
         <div className="networkbranch">
               <div className="networkbox"  onClick={() => handleBoxClick(topics[23])}>
                  NETWORK
                  <div className="description">
                  Network
It is the key component of cloud infrastructure. It allows to connect cloud services over the Internet. It is also possible to deliver network as a utility over the Internet, which means, the customer can customize the network route and protocol.
                  </div>
                </div>
        </div>
        <div className="serverbranch">
          <div className="serverbox"  onClick={() => handleBoxClick(topics[24])}>
            SERVER
            <div className="description">
            The server helps to compute the resource sharing and offers other services such as resource allocation and de-allocation, monitoring the resources, providing security etc.
            </div>
          </div>
        </div>
        <div className="storagebranch">
          <div className="storagebox"  onClick={() => handleBoxClick(topics[25])}>
            STORAGE
            <div className="description">
            Cloud keeps multiple replicas of storage. If one of the storage resources fails, then it can be extracted from another one, which makes cloud computing more reliable.
            </div>
          </div> 
          </div> 
        </div>
        </div>

        <div className="deploymodelbox">
          DEPLOYMENT MODELS
          <div className="ldeploymodelbranch">
            <div className="publiccloudbranch">
                  <div className="publiccloudbox" onClick={() => handleBoxClick(topics[26])}>
                  PUBLIC CLOUD
                  <div className="description">
                  As the name suggests, this type of cloud deployment model supports all users who want to make use of a 
                  computing resource, such as hardware (OS, CPU, memory, storage) or software (application server, database) 
                  on a subscription basis.
                  </div>
                  </div>
            </div>
            <div className="privatecloudbranch">
                  <div className="privatecloudbox" onClick={() => handleBoxClick(topics[27])}>
                  PRIVATE CLOUD
                    <div className="description">
                    True to its name, a private cloud is typically infrastructure used by a single organization. Such infrastructure 
                    may be managed by the organization itself to support various user groups, or it could be managed by a service provider 
                    that takes care of it either on-site or off-site. 
                    </div>
                  </div>
            </div>
          </div>
          <div className="rdeploymodelbranch">
          <div className="hybridcloudbranch">
            <div className="hybridcloudbox" onClick={() => handleBoxClick(topics[28])}>
              HYBRID CLOUD
              <div className="description">
              In a hybrid cloud, an organization makes use of interconnected private and public cloud infrastructure. Many organizations
               make use of this model when they need to scale up their IT infrastructure rapidly, such as when leveraging public clouds to 
               supplement the capacity available within a private cloud.
              </div>
            </div>

          </div>
          <div className="communitycloudbranch">
            <div className="communitycloudbox" onClick={() => handleBoxClick(topics[29])}>
                COMMUNITY CLOUD
                <div className="description">
                This deployment model supports multiple organizations sharing computing resources that are part of a community. It is designed
                 to meet the computing needs of a particular community, such as businesses, government agencies, or research institutions, 
                 rather than being available to the general public.
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="endbox">
          CONTINUE LEARNING -
          <br />
          <a href="https://en.wikipedia.org/wiki/Cloud_computing" target="_blank" rel="noopener noreferrer">Cloud Computing on Wikipedia</a>
          <br />
          <a href="https://www.udemy.com/course/basics-of-cloud-computing/" target="_blank" rel="noopener noreferrer">Basics of Cloud Computing on Udemy</a>
          <br />
          <a href="https://www.simplilearn.com/introduction-to-cloud-computing-basics-skillup" target="_blank" rel="noopener noreferrer">Introduction to Cloud Computing Basics on Simplilearn</a>
      </div>
    </div>
    
    {showSidebar && selectedTopic && (
            <SidebarContent data={selectedTopic} 
            selectedTopicIndex={selectedTopicIndex} 
            onHide={handleCloseSidebar}   
            onPrevious={handlePreviousTopic}
            onNext={handleNextTopic}
            />
          )}
        </>
      )}
   </div>
 );
};

export default MindMap;

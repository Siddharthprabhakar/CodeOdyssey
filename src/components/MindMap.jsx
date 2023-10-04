import { useState } from 'react';
import '../App.css';
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

const MindMap = () => {
  const [isIaasDescVisible, setIsIaasDescVisible] = useState(false);
  const [isPaasDescVisible, setIsPaasDescVisible] = useState(false);
  const [isSaasDescVisible, setIsSaasDescVisible] = useState(false);

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

  return (
      <div className="mind-map">
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
                    <div className="phpbox">
                      PHP
                    </div>
                    <div className="javabox">
                      JAVA
                    </div>
                </div>
                <div className="rubybranch">
                <div className="phpbox">
                      RUBY
                    </div>
                    <div className="javabox">
                      .NET
                    </div>
                </div>
                <div className="golangbranch">
                <div className="phpbox">
                      GOLANG
                    </div>
                    <div className="javabox">
                      JAVASCRIPT
                    </div>
                </div>
            </div>
          </div>
          <div className="rminbranch">
            <div className="rbranch">
              <div className="pybranch">
              <div className="pybox">
                      PYTHON
                    </div>
              </div>
              <div className="psbranch">
              <div className="pybox">
              POWERSHELL
                    </div>
              </div>
              <div className="bashbranch">
              <div className="pybox">
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
                <div className="awsbox">
                <img src={aws} alt="aws" />
                </div>
              </div>

              <div className="digitaloceanbranch">
                <div className="digitaloceanbox">
                <img src={digital} alt="digitalocean" />
                </div>
              </div>

              <div className="ovhbranch">
                <div className="ovhbox">
                  <img src={ovh} alt="OVHCloud"/>
                </div>
              </div>

              <div className="oraclebranch">
                <div className="Oraclebox">
                  <img src={oracle} alt="Oracle"/>
                </div>
              </div>

            </div>
            <div className="servicebranchright"></div>

            <div className="gcloudbranch">
              <div className="gcloudbox">
                <img src={gcloud} alt="googlecloud"/>
              </div>
            </div>

            <div className="azurebranch">
              <div className="azurebox">
                <img src={azure} alt="Azure"/>
              </div>
            </div>

            <div className="tencentbranch">
              <div className="tencentbox">
              <img src={tencent} alt="Tencent Cloud"/>
              </div>
            </div>

            <div className="ibmbranch">
              <div className="ibmbox">
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
            <div className="iaasbox" onMouseEnter={handleIaasMouseEnter} onMouseLeave={handleIaasMouseLeave}>
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
            <div className="paasbox" onMouseEnter={handlePaasMouseEnter} onMouseLeave={handlePaasMouseLeave}>
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
              <div className="saasbox"  onMouseEnter={handleSaasMouseEnter} onMouseLeave={handleSaasMouseLeave}>
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
                <div className="mgsoftbox">
                MANAGEMENT SOFTWARE
                <div className="description">
                Management software in cloud helps control and optimize digital resources remotely, ensuring efficient use and smooth operation of online services
                    </div>
                </div>
            </div>
            <div className="deploybranch">
                <div className="deploybox">
                DEPLOYMENT SOFTWARE
                <div className="description">
                Deployment software simplifies putting apps on the cloud. It automates the process, ensuring apps work well, integrate smoothly, and are easily accessible online.
                    </div>
                </div>
            </div>
            <div className="hyperbranch">
              <div className="hyperbox">
              HYPERVISOR
              <div className="description">
              Hypervisor is a firmware or low-level program that acts as a Virtual Machine Manager. It allows to share the single physical instance of cloud resources between several tenants.
                    </div>
              </div>
            </div> 
        </div>
        <div className="rcloudinfrabranch">
         <div className="networkbranch">
               <div className="networkbox">
                  NETWORK
                  <div className="description">
                  Network
It is the key component of cloud infrastructure. It allows to connect cloud services over the Internet. It is also possible to deliver network as a utility over the Internet, which means, the customer can customize the network route and protocol.
                  </div>
                </div>
        </div>
        <div className="serverbranch">
          <div className="serverbox">
            SERVER
            <div className="description">
            The server helps to compute the resource sharing and offers other services such as resource allocation and de-allocation, monitoring the resources, providing security etc.
            </div>
          </div>
        </div>
        <div className="storagebranch">
          <div className="storagebox">
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
                  <div className="publiccloudbox">
                  PUBLIC CLOUD
                  <div className="description">
                  As the name suggests, this type of cloud deployment model supports all users who want to make use of a 
                  computing resource, such as hardware (OS, CPU, memory, storage) or software (application server, database) 
                  on a subscription basis.
                  </div>
                  </div>
            </div>
            <div className="privatecloudbranch">
                  <div className="privatecloudbox">
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
            <div className="hybridcloudbox">
              HYBRID CLOUD
              <div className="description">
              In a hybrid cloud, an organization makes use of interconnected private and public cloud infrastructure. Many organizations
               make use of this model when they need to scale up their IT infrastructure rapidly, such as when leveraging public clouds to 
               supplement the capacity available within a private cloud.
              </div>
            </div>

          </div>
          <div className="communitycloudbranch">
            <div className="communitycloudbox">
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
  );
};

export default MindMap;

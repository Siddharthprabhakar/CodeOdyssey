import './nav.css'

const topicData = [
  {
    id: 'php',
    title: 'PHP Programming Language',
    description: 'PHP is a popular server-side scripting language...',
    // images: {
    //   main: 'path/to/php-image.jpg',
    //   related: ['path/to/image1.jpg', 'path/to/image2.jpg'],
    // },
    links: {
      wikipedia: 'https://en.wikipedia.org/wiki/PHP',
      tutorial: 'https://www.php.net/manual/en/tutorial.php',
    },
    videos: [
      'https://www.youtube.com/embed/a7_WFUlFS94'
    ],    
  },
    {
      id: 'java',
      title: 'Java Programming Language',
      description: 'Java is a high-level, class-based, object-oriented programming language...',
      // images: {
      //   main: 'URL_to_java_image.jpg',
      //   related: ['URL_to_java_related_image1.jpg', 'URL_to_java_related_image2.jpg'],
      // },
      links: {
        wikipedia: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
        tutorial: 'https://docs.oracle.com/javase/tutorial/',
      },
      videos: [
        'https://www.youtube.com/embed/ntLJmHOJ0ME?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q'
      ],
    },
    {
      id: 'ruby',
      title: 'Ruby Programming Language',
      description: 'Ruby is a dynamic, interpreted, reflective, object-oriented, general-purpose programming language...',
      // images: {
      //   main: 'URL_to_ruby_image.jpg',
      //   related: ['URL_to_ruby_related_image1.jpg', 'URL_to_ruby_related_image2.jpg'],
      // },
      links: {
        wikipedia: 'https://en.wikipedia.org/wiki/Ruby_(programming_language)',
        tutorial: 'https://www.ruby-lang.org/en/documentation/',
      },
      videos: [
        'https://www.youtube.com/embed/t_ispmWmdjY'
      ],
    },
    {
      id: 'dotnet',
      title: '.NET Framework',
      description: '.NET is a free, cross-platform, open-source framework for building modern, cloud-based, and internet-connected applications...',
      // images: {
      //   main: 'URL_to_dotnet_image.jpg',
      //   related: ['URL_to_dotnet_related_image1.jpg', 'URL_to_dotnet_related_image2.jpg'],
      // },
      links: {
        wikipedia: 'https://en.wikipedia.org/wiki/.NET_Framework',
        tutorial: 'https://dotnet.microsoft.com/learn',
      },
      videos: [
        'https://www.youtube.com/embed/kdPtNMb8tPw',
      ],
    },
    {
      id: 'golang',
      title: 'Go Programming Language',
      description: 'Go, also known as Golang, is a statically typed, compiled programming language designed at Google...',
      // images: {
      //   main: 'URL_to_golang_image.jpg',
      //   related: ['URL_to_golang_related_image1.jpg', 'URL_to_golang_related_image2.jpg'],
      // },
      links: {
        wikipedia: 'https://en.wikipedia.org/wiki/Go_(programming_language)',
        tutorial: 'https://tour.golang.org/welcome/1',
      },
      videos: [
        'https://www.youtube.com/embed/un6ZyFkqFKo'
      ],
    },
    {
      id: 'javascript',
      title: 'JavaScript Programming Language',
      description: 'JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification...',
      // images: {
      //   main: 'URL_to_javascript_image.jpg',
      //   related: ['URL_to_javascript_related_image1.jpg', 'URL_to_javascript_related_image2.jpg'],
      // },
      links: {
        wikipedia: 'https://en.wikipedia.org/wiki/JavaScript',
        tutorial: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
      },
      videos: [
        "https://www.youtube.com/embed/lkIFF4maKMU"
      ],
    },
    {
        id: 'python',
        title: 'Python Programming Language',
        description: 'Python is a high-level, interpreted programming language...',
        // images: {
        //   main: 'URL_to_python_image.jpg',
        //   related: ['URL_to_python_related_image1.jpg', 'URL_to_python_related_image2.jpg'],
        // },
        links: {
          wikipedia: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
          tutorial: 'https://docs.python.org/3/tutorial/',
        },
        videos: [
         "https://www.youtube.com/embed/x7X9w_GIm1s",
        ],
      },
      {
        id: 'powershell',
        title: 'PowerShell Scripting Language',
        description: 'PowerShell is a task automation framework...',
        // images: {
        //   main: 'URL_to_powershell_image.jpg',
        //   related: ['URL_to_powershell_related_image1.jpg', 'URL_to_powershell_related_image2.jpg'],
        // },
        links: {
          wikipedia: 'https://en.wikipedia.org/wiki/PowerShell',
          tutorial: 'https://docs.microsoft.com/en-us/powershell/scripting/overview',
        },
        videos: [
         "https://www.youtube.com/embed/tK9Oc6AEnR4" 
        ],
      },
      {
        id: 'bash',
        title: 'Bash/Shell Scripting',
        description: 'Bash is a Unix shell and command language...',
        // images: {
        //   main: 'URL_to_bash_image.jpg',
        //   related: ['URL_to_bash_related_image1.jpg', 'URL_to_bash_related_image2.jpg'],
        // },
        links: {
          wikipedia: 'https://en.wikipedia.org/wiki/Bash_(Unix_shell)',
          tutorial: 'https://www.learnshell.org/',
        },
        videos: [
          "https://www.youtube.com/embed/tK9Oc6AEnR4",
        ],
      },  
      {
        id: 'aws',
        title: 'Amazon Web Services (AWS)',
        description: 'Amazon Web Services (AWS) provides a wide range of cloud computing services, including computing power, storage options, and databases. AWS offers AWS Educate, a program designed to provide students and educators with free access to AWS services for learning purposes.',
        links: {
          website: 'https://aws.amazon.com/',
          education: 'https://aws.amazon.com/education/awseducate/',
        },
      },
      {
        id: 'digitalocean',
        title: 'DigitalOcean',
        description: 'DigitalOcean offers cloud computing services that simplify infrastructure complexities. They provide scalable virtual private servers (Droplets) and managed databases. DigitalOceans Student Developer Pack offers free credits for students to use their services.',
        links: {
          website: 'https://www.digitalocean.com/',
          education: 'https://www.digitalocean.com/docs/accounts/students/',
        },
      },
      {
        id: 'OVHCloud',
        title: 'OVHCloud',
        description: 'OVHCloud provides cloud infrastructure solutions, including virtual private servers, dedicated servers, and public cloud services. They offer special discounts and credits for students and educational institutions.',
        links: {
          website: 'https://www.ovhcloud.com/',
          education: 'https://www.ovh.com/world/community/ovh-academy/students/',
        },
      },
      {
        id: 'Oracle',
        title: 'Oracle Cloud',
        description: 'Oracle Cloud offers a comprehensive suite of cloud services, including computing, storage, and databases. Oracle for Students program provides free access to Oracle Cloud resources for eligible students.',
        links: {
          website: 'https://www.oracle.com/cloud/',
          education: 'https://www.oracle.com/cloud/free/',
        },
      },
      {
        id: 'googlecloud',
        title: 'Google Cloud',
        description: 'Google Cloud Platform (GCP) provides a variety of cloud services, including computing, storage, machine learning, and data analytics. Google Cloud offers free credits and resources for students through their Google Cloud Education Grant.',
        links: {
          website: 'https://cloud.google.com/',
          education: 'https://edu.google.com/programs/credits/cloud/',
        },
      },
      {
        id: 'Azure',
        title: 'Microsoft Azure',
        description: 'Microsoft Azure offers cloud services for computing, analytics, storage, and networking. Azure for Students provides free Azure services and $100 in Azure credits for students to explore and develop cloud-based applications.',
        links: {
          website: 'https://azure.microsoft.com/',
          education: 'https://azure.microsoft.com/en-us/free/students/',
        },
      },
      {
        id: 'Tencent Cloud',
        title: 'Tencent Cloud',
        description: 'Tencent Cloud is a leading cloud service provider in China, offering a wide range of cloud services, including computing, storage, and databases. Tencent Cloud provides various discounts and free trial credits for students.',
        links: {
          website: 'https://intl.cloud.tencent.com/',
          education: 'https://intl.cloud.tencent.com/act/campus',
        },
      },
      {
        id: 'IBM',
        title: 'IBM Cloud',
        description: 'IBM Cloud offers a comprehensive suite of cloud computing services, including AI, blockchain, and IoT solutions. IBM provides free cloud services and resources for students, allowing them to experiment and learn on the IBM Cloud platform.',
        links: {
          website: 'https://www.ibm.com/cloud',
          education: 'https://www.ibm.com/cloud/learn/students',
        },
      },
      {
        id: 'iaas',
        title: 'Infrastructure as a Service (IaaS)',
        description: 'Infrastructure as a Service (IaaS) is like renting a virtual computer over the internet. Instead of owning and maintaining physical servers, you can access computing resources, such as virtual machines, storage, and networking, through the cloud. It\'s like having a powerful computer that you can control remotely via the internet.',
        links: {
            wikipedia: 'https://en.wikipedia.org/wiki/Infrastructure_as_a_service',
            tutorial: 'https://www.learn-c.org/' 
        }
      },
      {
        id: 'paas',
        title: 'Platform as a Service (PaaS)',
        description: 'Platform as a Service (PaaS) provides a platform that includes everything needed to develop, run, and manage applications without dealing with the complexity of building and maintaining the infrastructure. It\'s like having a fully equipped kitchen where you can cook without worrying about owning the kitchen appliances.',
        links: {
          wikipedia: 'https://en.wikipedia.org/wiki/Platform_as_a_service',
          tutorial: 'https://www.cloudflare.com/learning/serverless/glossary/what-is-paas/',
         }
      },
      {
        id: 'saas',
        title: 'Software as a Service (SaaS)',
        description: 'Software as a Service (SaaS) delivers software applications over the internet on a subscription basis. Instead of purchasing and installing software on individual computers, users can access the software via a web browser. It\'s like using an application directly from your internet browser without downloading or installing it.',
        links: {
            wikipedia: 'https://en.wikipedia.org/wiki/Software_as_a_service',
            tutorial: 'https://www.salesforce.com/saas/'         
      }
    },
    {
        id: 'management-software',
        title: 'Cloud Computing Management Software',
        description: 'Cloud computing management software refers to tools and applications used to manage and monitor cloud computing resources and services. These software solutions help businesses optimize their cloud infrastructure, automate tasks, monitor performance, and ensure security. Management software is essential for efficiently utilizing cloud resources and ensuring seamless operations.',
        learnMoreLinks: [
          { title: 'Cloud Management Software Overview', url: 'https://www.vmware.com/topics/glossary/content/cloud-management-software' },
          { title: 'Cloud Management Platforms Explained', url: 'https://www.redhat.com/en/topics/cloud-computing/what-is-cloud-management' }
        ]
      },
      {
        id: 'deployment-software',
        title: 'Cloud Deployment Software',
        description: 'Cloud deployment software facilitates the process of deploying applications and services on cloud infrastructure. These tools automate the deployment process, ensuring that applications run smoothly and efficiently in the cloud environment. Cloud deployment software plays a crucial role in accelerating the development lifecycle and ensuring seamless transitions from development to production.',
        learnMoreLinks: [
          { title: 'Cloud Deployment Automation', url: 'https://aws.amazon.com/what-is-aws/cloud-deployment/' },
          { title: 'Automated Cloud Deployment Benefits', url: 'https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-deployment/' }
        ]
      },
      {
        id: 'hypervisor',
        title: 'Hypervisor',
        description: 'A hypervisor, also known as a virtual machine monitor (VMM), is a software or hardware component that enables the virtualization of physical computing resources. Hypervisors allow multiple operating systems to run on a single physical machine, each operating system operating in its isolated virtual environment. This technology is fundamental to cloud computing, enabling the efficient use of server resources.',
        learnMoreLinks: [
          { title: 'Hypervisor Technology Overview', url: 'https://www.redhat.com/en/topics/virtualization/what-is-a-hypervisor' },
          { title: 'Virtualization and Hypervisor Explained', url: 'https://www.vmware.com/topics/glossary/content/hypervisor' }
        ]
      },
      {
        id: 'network',
        title: 'Cloud Networking',
        description: 'Cloud networking encompasses the technologies and processes used to establish and manage network connections within cloud computing environments. It involves virtualized network infrastructure that allows cloud users to connect and communicate with cloud-based resources securely and efficiently. Cloud networking solutions enable the seamless flow of data and services between users, applications, and cloud servers.',
        learnMoreLinks: [
          { title: 'Introduction to Cloud Networking', url: 'https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-networking/' },
          { title: 'Cloud Networking Solutions', url: 'https://www.cisco.com/c/en/us/solutions/cloud/what-is-cloud-networking.html' }
        ]
      },
      {
        id: 'server',
        title: 'Cloud Servers',
        description: 'Cloud servers are virtual servers hosted in a cloud computing environment. These servers run on virtualized hardware, allowing multiple virtual machines (VMs) to run on a single physical server. Cloud servers offer scalable computing resources, enabling users to increase or decrease server capacity based on demand. They are fundamental components of cloud infrastructure, providing processing power for applications and services.',
        learnMoreLinks: [
          { title: 'Understanding Cloud Servers', url: 'https://aws.amazon.com/types-of-cloud-computing/servers/' },
          { title: 'Benefits of Cloud Servers', url: 'https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-are-cloud-servers/' }
        ]
      },
      {
        id: 'storage',
        title: 'Cloud Storage',
        description: 'Cloud storage refers to the storage of data online in the cloud computing environment. Cloud storage providers offer scalable, secure, and redundant storage solutions accessible via the internet. Users can store and retrieve files, documents, and multimedia content from cloud storage services. Cloud storage eliminates the need for physical storage devices and allows seamless access to data from various devices and locations.',
        learnMoreLinks: [
          { title: 'Cloud Storage Explained', url: 'https://www.ibm.com/cloud/learn/cloud-storage' },
          { title: 'Benefits of Cloud Storage', url: 'https://www.redhat.com/en/topics/cloud-computing/what-is-cloud-storage' }
        ]
      },
      {
        id: 'public-cloud',
        title: 'Public Cloud',
        description: 'Public Cloud refers to cloud services offered to multiple customers over the internet. It is owned and operated by third-party service providers, allowing businesses and individuals to use computing resources, such as virtual machines and storage, on a pay-as-you-go basis.',
        images: {
          main: 'URL_to_public_cloud_image.jpg',
          related: ['URL_to_public_cloud_related_image1.jpg', 'URL_to_public_cloud_related_image2.jpg'],
        },
        links: {
          wikipedia: 'https://en.wikipedia.org/wiki/Public_cloud',
          learnMore: 'https://aws.amazon.com/what-is-cloud-computing/',
        },
      },
      {
        id: 'private-cloud',
        title: 'Private Cloud',
        description: 'Private Cloud refers to cloud infrastructure dedicated to a single organization. It can be hosted on-premises or by a third-party service provider. Private Cloud offers enhanced security, control, and customization, making it suitable for businesses with specific compliance and data privacy requirements.',
        images: {
          main: 'URL_to_private_cloud_image.jpg',
          related: ['URL_to_private_cloud_related_image1.jpg', 'URL_to_private_cloud_related_image2.jpg'],
        },
        links: {
          wikipedia: 'https://en.wikipedia.org/wiki/Private_cloud',
          learnMore: 'https://www.ibm.com/cloud/learn/private-cloud/',
        },
      },
      {
        id: 'hybrid-cloud',
        title: 'Hybrid Cloud',
        description: 'Hybrid Cloud combines public and private cloud environments, allowing data and applications to be shared between them. It provides flexibility, enabling organizations to leverage the scalability of public cloud resources while maintaining sensitive data and critical workloads in a private cloud or on-premises infrastructure.',
        images: {
          main: 'URL_to_hybrid_cloud_image.jpg',
          related: ['URL_to_hybrid_cloud_related_image1.jpg', 'URL_to_hybrid_cloud_related_image2.jpg'],
        },
        links: {
          wikipedia: 'https://en.wikipedia.org/wiki/Hybrid_cloud',
          learnMore: 'https://azure.microsoft.com/en-us/solutions/hybrid/',
        },
      },
      {
        id: 'community-cloud',
        title: 'Community Cloud',
        description: 'Community Cloud is a cloud infrastructure shared by multiple organizations with common goals, such as industry-specific regulations or standards. It offers collaborative features, enabling organizations within a specific community, such as healthcare or research, to share resources and data securely.',
        images: {
          main: 'URL_to_community_cloud_image.jpg',
          related: ['URL_to_community_cloud_related_image1.jpg', 'URL_to_community_cloud_related_image2.jpg'],
        },
        links: {
          wikipedia: 'https://en.wikipedia.org/wiki/Community_cloud',
          learnMore: 'https://www.salesforce.com/in/cloud-computing/',
        },
      },
];
    
export default topicData;
    
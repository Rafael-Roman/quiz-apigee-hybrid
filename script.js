const questions = [
    {
        question: "How does Apigee help in the digital transformation of an enterprise?",
        answers: [
            { text: "Using Apigee, you can easily and securely integrate with backend services", correct: false},
            { text: "Apigee enables the entire digital value chain, from exposure to consumption of services and data, using APIs", correct: true},
            { text: "Apigee can be used to break up a monolithic application into microservices", correct: false},
            { text: "Apigee provides capabilities of a service mesh that you can use to run microservices", correct: false},
        ],
    },

    {
        question: "What deployment models does Apigee not support?",
        answers: [
            { text: "Customer-managed management and runtime planes", correct: false},
            { text: "Apigee-managed management and runtime planes", correct: false},
            { text: "Customer-managed management plane and Apigee-managed runtime plane", correct: true},
            { text: "Apigee-managed management plane and customer-managed runtime plane", correct: false},
        ],
    },

    {
        question: "Which of the following is not an advantage of using Apigee Hybrid?",
        answers: [
            { text: "The hybrid runtime plane is deployed to Google Cloud, to other clouds, or in your own data center, giving you complete control over its management and operations", correct: false},
            { text: "Apigee hybrid runs on Kubernetes, so you can achieve autoscaling and other operational benefits of a containerized system.", correct: false},
            { text: "With Apigee hybrid, you operate your API runtime plane with fewer software services than in a private cloud deployment, resulting in reduced cost of ownership", correct: false},
            { text: "Installing the Apigee hybrid runtime plane on GKE provides automatic access to all other Google Cloud APIs and services", correct: true},
        ],
    },
    {
        question: "Which set of HTTP methods contains one that is invalid?",
        answers: [
            { text: "GET, POST, PUT", correct: false},
            { text: "PATCH, HEAD, DELETE", correct: false},
            { text: "PUT, TAIL, GET", correct: true},
            { text: "OPTIONS, TRACE, PATCH", correct: false},
        ],
    },
    {
        question: "Which services are not part of Apigee's hybrid management plane?",
        answers: [
            { text: "Identity and Access Management (IAM)", correct: true},
            { text: "Apigee API", correct: false},
            { text: "Unified Analytics Platform (UAP)", correct: false},
            { text: "Hybrid UI", correct: false},
        ],
    },
    {
        question: "Which hybrid runtime component provides an API interface to the management plane?",
        answers: [
            { text: "Synchronizer", correct: true},
            { text: "UDCA", correct: false},
            { text: "MART", correct: false},
            { text: "Message Processor", correct: false},
        ],
    },
    {
        question: "In Apigee hybrid, which mechanism is used to map a domain name to an environment?",
        answers: [
            { text: "Define an environment property in the overrides file configuration of the runtime plane, and map one or more domain names to this property", correct: false},
            { text: "Define a virtualhost property in the overrides file configuration of the runtime plane, and map the environment to this property", correct: false},
            { text: "Define an environment group property in the overrides file configuration of the runtime plane, and map the environment to this property", correct: false},
            { text: "Create an environment group with one or more domain names, and assign the environment to the group. Configure a virtual host in the runtime plane to use the environment group", correct: true},
        ],
    },
    {
        question: "Which mechanism is used by the Apigee API to authenticate and authorize management API requests in hybrid?",
        answers: [
            { text: "Client certificate", correct: false},
            { text: "OAuth", correct: true},
            { text: "Service accounts", correct: false},
            { text: "Username/password", correct: false},
        ],
    },
    {
        question: "Which of the following properties cannot be configured in the overrides.yaml file used in the hybrid installation process?",
        answers: [
            { text: "Google Cloud project ID", correct: false},
            { text: "Namespace", correct: false},
            { text: "Service account files", correct: false},
            { text: "API proxy definition", correct: true},
        ],
    },
    {
        question: "Which of the following methods of using the apigeectl command is invalid?",
        answers: [
            { text: "apigeectl apply -f ./overrides.yaml", correct: false},
            { text: "apigeectl init -f ./overrides.yaml -c environment", correct: true},
            { text: "apigeectl delete -f ./overrides.yaml", correct: false},
            { text: "apigeectl check-ready -f ./overrides.yaml", correct: false},
        ],
    },
    {
        question: "Which of the following is a true statement regarding backup of the Cassandra datastore in the hybrid runtime plane?",
        answers: [
            { text: "Cassandra backup is enabled by default", correct: false},
            { text: "The Cassandra backup process does not need authentication to perform the backup", correct: false},
            { text: "Apigee hybrid can only back up Cassandra to a Cloud Storage bucket", correct: false},
            { text: "The Cassandra backup schedule is configured in the overrides configuration file using standard crontab syntax", correct: true},
        ],
    },
    {
        question: "Which one of the following is true regarding API proxy deployment in Apigee hybrid?",
        answers: [
            { text: "A saved proxy revision cannot be modified", correct: false},
            { text: "A deployed proxy revision is immutable", correct: true},
            { text: "A deployed proxy revision is immediately available on all Message Processors serving the environment in the runtime cluster", correct: false},
            { text: "There is no limit to the number of API proxies that can be deployed to an environment", correct: false},
        ],
    },
    {
        question: "How are API proxy changes made available in the runtime plane?",
        answers: [
            { text: "The Synchronizer polls the management plane for proxy changes and makes them available to the Message Processors", correct: true},
            { text: "The Message Processors poll the management plane for API proxy changes", correct: false},
            { text: "UDCA collects changes in the API proxy from the management plane and sends them to the Message Processors", correct: false},
            { text: "API proxy changes are saved in Cassandra, and the Message Processors fetch the proxy bundles from the database", correct: false},
        ],
    },
    {
        question: "Which one of the following is true regarding environments in Apigee hybrid:",
        answers: [
            { text: "An environment can be assigned to at most one environment group before it can be used", correct: false},
            { text: "An environment can have multiple host aliases or domain names defined", correct: false},
            { text: "An environment is mapped to a single runtime deployment resource in the Kubernetes cluster", correct: true},
            { text: "The name of an environment can be modified after the environment is created", correct: false},
        ],
    },
    {
        question: "When using the Debug feature in Apigee hybrid, you:",
        answers: [
            { text: "Can view the debug session in the hybrid UI synchronously as the request is received by the runtime", correct: false},
            { text: "Cannot filter requests using the Apigee DebugSession API", correct: false},
            { text: "Cannot set breakpoints in the hybrid UI for API request or response flows", correct: true},
            { text: "Cannot download a debug session from the hybrid UI for offline viewing", correct: false},
        ],
    },
    {
        question: "Which one of the following statements about authentication between the hybrid management plane and runtime plane components is true:",
        answers: [
            { text: "The MART runtime component uses a sidecar container to generate OAuth tokens used for securely communicating with the hybrid management plane", correct: false},
            { text: "The UDCA runtime component uses a sidecar container to verify OAuth tokens received when securely communicating with the hybrid management plane", correct: false},
            { text: "The Synchronizer runtime component uses a sidecar container to generate OAuth tokens used for securely communicating with the hybrid management plane", correct: true},
            { text: "OAuth tokens are not used for communication between the hybrid management plane and the runtime plane components", correct: false},
        ],
    },
    {
        question: "To securely communicate between the API proxy running in Apigee hybrid and the target backend, as a best practice:",
        answers: [
            { text: "Use a keystore that contains the private key and certificate of the runtime component", correct: false},
            { text: "For 2-way TLS, only use a keystore that contains the private key and certificate chain of the runtime message processor", correct: false},
            { text: "Configure the virtualhost property with a TLS key and certificate in the overrides configuration file", correct: false},
            { text: "Create a TargetServer configuration with TLS and client authentication enabled. Use references to a truststore and keystore in the configuration of the target server", correct: true},
        ],
    },
    {
        question: "In Apigee hybrid, the KMS, key-value map, and cache data are encrypted using organization- or environment-scoped encryption keys. Which one of the following is correct:",
        answers: [
            { text: "KMS data is encrypted using an organization-scoped encryption key", correct: true},
            { text: "KVM data is encrypted using only an environment-scoped encryption key", correct: false},
            { text: "Cache data is encrypted using an organization-scoped encryption key", correct: false},
            { text: "The default Apigee-provided encryption keys cannot be changed", correct: false},
        ],
    },
    {
        question: "In Apigee hybrid, roles that are granted to a user at the Google Cloud project level are inherited at:",
        answers: [
            { text: "The Google Cloud organization level", correct: false},
            { text: "The Apigee hybrid environment level for all environments in the Apigee hybrid organization by default", correct: true},
            { text: "The Apigee hybrid environment level for a specific environment in the Apigee hybrid organization", correct: false},
            { text: "The Google Cloud project level only", correct: false},
        ],
    },
    {
        question: "Which of the following is not a factor to consider when planning the capacity of your hybrid runtime infrastructure?",
        answers: [
            { text: "API processing logic", correct: false},
            { text: "Business strategy", correct: false},
            { text: "Testing requirements", correct: true},
            { text: "Service level agreements", correct: false},
        ],
    },
    {
        question: "Which one of the hybrid runtime components cannot be autoscaled?",
        answers: [
            { text: "Synchronizer", correct: false},
            { text: "MART", correct: false},
            { text: "Cassandra", correct: true},
            { text: "Runtime (Message Processor)", correct: false},
        ],
    },
    {
        question: "What is the recommended best practice to scale the Apigee hybrid runtime component?",
        answers: [
            { text: "Use the kubectl scale command", correct: false},
            { text: "Declare the min and max replica counts in the overrides.yaml file, and run the apigeectl apply command", correct: true},
            { text: "Create a Horizontal Pod Autoscaler", correct: false},
            { text: "The hybrid runtime component cannot be scaled", correct: false},
        ],
    },
    {
        question: "When upgrading Apigee hybrid:",
        answers: [
            { text: "You may need to upgrade the underlying Kubernetes platform", correct: true},
            { text: "You do not have to back up the runtime datastore used in your current Apigee hybrid installation", correct: false},
            { text: "You can upgrade Apigee hybrid from any previous version to the latest released version", correct: false},
        ],
    },
    {
        question: "What is the recommended best practice to perform a rolling incremental (A/B) update to a hybrid runtime component?",
        answers: [
            { text: "Run the kubectl set command", correct: false},
            { text: "Rolling updates are not supported by Apigee hybrid", correct: false},
            { text: "Set the revision property in the overrides.yaml file, and run the apigeectl apply command", correct: true},
            { text: "Using the kubectl set command or the revision property in the overrides.yaml file are both best practices", correct: false},
        ],
    },
    {
        question: "When upgrading Apigee hybrid in a production environment, what sequence should you follow to upgrade the runtime plane components in the cluster?",
        answers: [
            { text: "Upgrade telemetry components, organization-level components, environments, and Cassandra, in that order", correct: false},
            { text: "Upgrade Cassandra, telemetry components, Redis components, organization-level components, environments, and virtualhosts in that order", correct: true},
            { text: "Upgrade organization-level components, Cassandra, telemetry components, and environments, in that order", correct: false},
            { text: "Upgrade environments, organization-level components, Cassandra, and telemetry components, in that order", correct: false},
        ],
    },
    {
        question: "Which analysis functions are not supported by Apigee hybrid?",
        answers: [
            { text: "Track operational performance of API proxies", correct: false},
            { text: "Measure adoption of the API program by application developers", correct: false},
            { text: "Customize existing analytics dashboards in the hybrid UI", correct: true},
            { text: "Create custom reports", correct: false},
        ],
    },
    {
        question: "To properly monitor the health of the Apigee hybrid runtime plane, which metrics should be monitored?",
        answers: [
            { text: "Kubernetes cluster and node metrics", correct: false},
            { text: "Pod and container metrics", correct: false},
            { text: "Hybrid application workload metrics", correct: false},
            { text: "Metrics for the Kubernetes cluster, node, pod, container and application workloads", correct: true},
        ],
    },
    {
        question: "Which is a valid critical path of components to troubleshoot when there are issues in the runtime execution of an API proxy?",
        answers: [
            { text: "Synchronizer, Message Processor, UDCA", correct: false},
            { text: "Ingress gateway, Message Processor, Cassandra", correct: true},
            { text: "Message Processor, fluentd, UDCA", correct: false},
            { text: "Apigee Connect, MART, Cassandra", correct: false},
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    
        
    });
}




function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Yoy score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();













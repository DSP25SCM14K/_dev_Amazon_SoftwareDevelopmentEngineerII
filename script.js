const dynamicPhrases = [
  "object-oriented design that stays readable at scale",
  "retries, traces, and alerts before production surprises",
  "agent guardrails with human-in-the-loop validation",
  "CI/CD pipelines that make delivery repeatable",
  "Java, C++, and Python services with clear contracts",
  "customer impact translated into operational signals"
];

const experience = [
  {
    company: "Sprouts AI",
    role: "Software Engineer (Backend & Agentic Platforms)",
    location: "Chicago, IL",
    dates: "Mar 2025 - Present",
    bullets: [
      "Designed, implemented, and deployed software components for a production agentic-first hiring platform in Python and Java, reducing recruiter operational toil 40% by automating scheduling, screening, and diagnostic workflows end-to-end.",
      "Built agent governance and security controls (authentication, authorization, safety guardrails, and human-in-the-loop validation) for autonomous agents, sustaining sub-second latency and reliable operation for 1,000+ daily users.",
      "Accelerated prototyping, validation, and test-case generation 50% using GenAI and AI-assisted code generation and review tools, cutting development cycle time without sacrificing security rigor.",
      "Improved availability and reliability of LLM inference serving on containerized AWS infrastructure by adding monitoring, automated retries, and CI/CD automation with Pytest integration coverage.",
      "Owned systems end-to-end and mentored teammates on design approaches and architecture while partnering across platform, infrastructure, safety, and ML teams in Agile delivery."
    ]
  },
  {
    company: "Resilience Inc",
    role: "Software Engineer (Java/Backend)",
    location: "Chicago, IL",
    dates: "Aug 2023 - Mar 2025",
    bullets: [
      "Architected and deployed large-scale Java and Python backend microservices using object-oriented design and proven design patterns, cutting page-load latency 30% across 10,000+ production users.",
      "Reduced operational toil and time to resolve issues by automating investigative and diagnostic tasks with data-driven tooling and AI-assisted scripts, standardizing operations across services.",
      "Raised system reliability by enforcing software engineering best practices (code reviews, coding standards, source control, build processes) and profiling and debugging large-scale services.",
      "Delivered ML-driven personalization features through Agile cross-functional development with CI/CD automation (GitHub Actions), integration testing, and containerized production deployment.",
      "Synthesized technical documentation and architectural patterns using GenAI tools, accelerating research and decision-making in ambiguous problem spaces."
    ]
  },
  {
    company: "Tata Steel",
    role: "Software Engineer (Java/Distributed Systems)",
    location: "",
    dates: "Apr 2018 - Aug 2023",
    bullets: [
      "Architected cloud-native Java and C++ microservices for enterprise-scale distributed data pipelines, achieving 40% API response improvement and 99.99% availability in production.",
      "Engineered for reliability and scaling with object-oriented design and design patterns, reducing operational toil 60% by automating high-throughput data and deployment workflows.",
      "Built and operated end-to-end build, test, and CI/CD pipelines, enforcing coding standards, code reviews, and source control across frontend and backend teams.",
      "Led full-SDLC delivery with debugging, profiling, and post-deployment incident triage, improving latency, performance, and efficiency of large-scale production systems.",
      "Trained and mentored new teammates on system architecture, testing, and operations, owning services end-to-end at enterprise scale."
    ]
  }
];

const projects = [
  {
    name: "AgentStore / AskMyStore",
    category: "agents",
    kicker: "Multi-agent orchestration",
    description: "Multi-agent orchestration platform with LangGraph implementing agent governance, tool-calling, and safety guardrails.",
    tags: ["LangGraph", "Python", "Agents"],
    source: "https://github.com/devthedevil/AskMyStore",
    demo: "https://ask-my-store.vercel.app/"
  },
  {
    name: "LangChain Chat with Search",
    category: "agents",
    kicker: "AI agent + RAG",
    description: "LangChain agent with web-search and Wikipedia tool-calling, zero-shot reasoning, and RAG retrieval.",
    tags: ["LangChain", "RAG", "Search"],
    source: "https://github.com/devthedevil/LangChain-Chat-with-Search",
    demo: "https://github.com/devthedevil/LangChain-Chat-with-Search"
  },
  {
    name: "AgentFlow",
    category: "agents",
    kicker: "Agent SDK",
    description: "Agent orchestration project focused on tool calling, handoffs, and structured workflows for autonomous task execution.",
    tags: ["OpenAI", "Agents", "Tools"],
    source: "https://github.com/devthedevil/openAI-Agent-SDK",
    demo: "https://github.com/devthedevil/openAI-Agent-SDK"
  },
  {
    name: "MCP Tool Integrations",
    category: "agents",
    kicker: "Model Context Protocol",
    description: "MCP-based integrations connecting LLM agents to external tools and APIs through governed interfaces.",
    tags: ["MCP", "Python", "Tooling"],
    source: "https://github.com/devthedevil/MCP",
    demo: "https://github.com/devthedevil/MCP"
  },
  {
    name: "HireLoop",
    category: "backend",
    kicker: "Backend services",
    description: "Distributed hiring workflow service with REST APIs, PostgreSQL persistence, Linux deployment foundations, and backend service design.",
    tags: ["Go", "PostgreSQL", "Docker"],
    source: "https://github.com/devthedevil/hireloop",
    demo: "https://github.com/devthedevil/hireloop"
  },
  {
    name: "TradeSentinel",
    category: "backend",
    kicker: "Risk analytics",
    description: "Market intelligence interface combining signal dashboards, analytics, and live deployment polish.",
    tags: ["React", "Analytics", "Markets"],
    source: "https://github.com/devthedevil/tradesentinel",
    demo: "https://tradesentinel.vercel.app/"
  },
  {
    name: "Real-time Stock Market Analysis Pipeline",
    category: "backend",
    kicker: "Streaming data",
    description: "Streaming pipeline replicating live market data through Kafka producers and consumers into S3 with Athena and Glue querying.",
    tags: ["Kafka", "Python", "AWS"],
    source: "https://github.com/devthedevil/Realtime-Stock-Market-Analysis",
    demo: "https://github.com/devthedevil/Realtime-Stock-Market-Analysis"
  },
  {
    name: "CME MDP 3.0 Multicast Feed Handler",
    category: "systems",
    kicker: "Low-latency streams",
    description: "C++ multicast feed handler decoding CME MDP 3.0 binary protocol with sequence-gap detection, recovery, and real-time stream processing.",
    tags: ["C++", "UDP", "Real-time"],
    source: "https://github.com/devthedevil/CME-Multicast-Market-Data-Feed-Handler-C-",
    demo: "https://github.com/devthedevil/CME-Multicast-Market-Data-Feed-Handler-C-"
  },
  {
    name: "EXPOS Experimental Operating System",
    category: "systems",
    kicker: "Operating systems",
    description: "Experimental operating system work covering process behavior, memory, and low-level execution mechanics.",
    tags: ["OS", "Systems", "C"],
    source: "https://github.com/devthedevil/EXPOS",
    demo: "https://github.com/devthedevil/EXPOS"
  },
  {
    name: "Character Device Driver",
    category: "systems",
    kicker: "Kernel interface",
    description: "Linux character device driver implementation for device-level programming and kernel/user-space interaction.",
    tags: ["Linux", "Kernel", "C"],
    source: "https://github.com/devthedevil/Character-Device-Driver",
    demo: "https://github.com/devthedevil/Character-Device-Driver"
  },
  {
    name: "16-Bit RISC Processor",
    category: "systems",
    kicker: "Computer architecture",
    description: "Hardware lab project implementing processor concepts across instruction flow, datapath behavior, and digital design.",
    tags: ["RISC", "Hardware", "Architecture"],
    source: "https://github.com/devthedevil/Hardware-lab",
    demo: "https://github.com/devthedevil/Hardware-lab"
  },
  {
    name: "Oxide HV",
    category: "systems",
    kicker: "Rust virtualization",
    description: "Rust systems project exploring hypervisor concepts with a live architecture walkthrough.",
    tags: ["Rust", "Systems", "Virtualization"],
    source: "https://github.com/devthedevil/oxide-hv",
    demo: "https://oxide-hv.vercel.app/"
  },
  {
    name: "Voting App on Kubernetes",
    category: "systems",
    kicker: "Cloud deployment",
    description: "Containerized voting application demonstrating Kubernetes deployment patterns and service orchestration.",
    tags: ["Kubernetes", "Docker", "DevOps"],
    source: "https://github.com/devthedevil/Kubernetes-K8",
    demo: "https://github.com/devthedevil/Kubernetes-K8"
  },
  {
    name: "Movie Recommendation Systems",
    category: "apps",
    kicker: "IEEE publication",
    description: "Comparative study of recommendation systems using feature engineering, evaluation, and model comparison.",
    tags: ["ML", "Research", "Recommendations"],
    source: "https://github.com/devthedevil/Comparative-Study-of-Movie-Recommendation-System/blob/main/Netflix_Movie.ipynb",
    demo: "https://ieeexplore.ieee.org/document/10094480",
    extra: {
      label: "Certificate",
      href: "https://drive.google.com/file/d/1rayr6Cht6quyLUJOXWOAcBi_rxQp2Ol0/view"
    }
  },
  {
    name: "STRANGERS",
    category: "apps",
    kicker: "React application",
    description: "React application with live deployment, interface state, and product-style UI delivery.",
    tags: ["React", "Frontend", "Deployment"],
    source: "https://github.com/devthedevil/Strangers",
    demo: "https://strangers-react.vercel.app/"
  },
  {
    name: "Pitch Perfect",
    category: "apps",
    kicker: "iOS app",
    description: "iOS application exploring audio capture, transformation, and mobile interaction patterns.",
    tags: ["iOS", "Swift", "Audio"],
    source: "https://github.com/devthedevil/Pitch_Perfect",
    demo: "https://github.com/devthedevil/Pitch_Perfect"
  },
  {
    name: "Tic Tac Toe",
    category: "apps",
    kicker: "Android app",
    description: "Android game project demonstrating mobile UI, state handling, and application logic.",
    tags: ["Android", "Mobile", "Game"],
    source: "https://github.com/devthedevil/TicTacToe-Game",
    demo: "https://github.com/devthedevil/TicTacToe-Game"
  }
];

function startTypewriter() {
  const target = document.querySelector("#typewriter");
  if (!target) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const phrase = dynamicPhrases[phraseIndex];
    charIndex += deleting ? -1 : 1;
    target.textContent = phrase.slice(0, charIndex);

    let delay = deleting ? 28 : 54;
    if (!deleting && charIndex === phrase.length) {
      deleting = true;
      delay = 1450;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % dynamicPhrases.length;
      delay = 280;
    }

    window.setTimeout(tick, delay);
  };

  tick();
}

function renderExperience() {
  const list = document.querySelector("#experience-list");
  if (!list) return;

  list.innerHTML = experience
    .map(
      (item) => `
        <article class="experience-card">
          <div class="experience-meta">
            <h3>${item.company}</h3>
            <p class="role">${item.role}</p>
            <p>${item.location ? `${item.location} | ` : ""}${item.dates}</p>
          </div>
          <ul>
            ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderProjects(filter = "all") {
  const grid = document.querySelector("#project-grid");
  if (!grid) return;

  grid.innerHTML = projects
    .map((project, index) => {
      const isHidden = filter !== "all" && project.category !== filter;
      const accent = ["#64f4df", "#8b7cff", "#ffb45f", "#7cf0a5", "#ff7894"][index % 5];
      return `
        <article class="project-card${isHidden ? " is-hidden" : ""}" style="--accent: ${accent}">
          <span class="project-kicker">${project.kicker}</span>
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <div class="tag-list">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="project-links">
            <a href="${project.source}" target="_blank" rel="noreferrer">Source</a>
            <a href="${project.demo}" target="_blank" rel="noreferrer">Demo</a>
            ${project.extra ? `<a href="${project.extra.href}" target="_blank" rel="noreferrer">${project.extra.label}</a>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
}

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderProjects(button.dataset.filter);
    });
  });
}

function animateMetrics() {
  const metrics = document.querySelectorAll(".metric-number");
  if (!metrics.length) return;

  const run = (node) => {
    const value = Number(node.dataset.count || "0");
    const duration = 1100;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = Math.round(value * eased).toString();
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  metrics.forEach((metric) => run(metric));
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

function setupCanvas() {
  const canvas = document.querySelector("#service-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const colors = ["rgba(100, 244, 223, 0.72)", "rgba(139, 124, 255, 0.58)", "rgba(255, 180, 95, 0.58)", "rgba(124, 240, 165, 0.58)"];
  let width = 0;
  let height = 0;
  let packets = [];

  const resize = () => {
    width = canvas.width = window.innerWidth * window.devicePixelRatio;
    height = canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const laneCount = Math.min(8, Math.max(4, Math.floor(window.innerHeight / 130)));
    packets = Array.from({ length: laneCount * 9 }, (_, index) => ({
      lane: index % laneCount,
      x: Math.random() * width,
      speed: (0.48 + Math.random() * 0.7) * window.devicePixelRatio,
      size: (1.7 + Math.random() * 2.1) * window.devicePixelRatio,
      color: colors[index % colors.length],
      drift: Math.random() * 60 * window.devicePixelRatio
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";
    const laneCount = Math.min(8, Math.max(4, Math.floor(window.innerHeight / 130)));

    packets.forEach((packet, index) => {
      const laneGap = height / (laneCount + 1);
      const y = laneGap * (packet.lane + 1) + Math.sin((packet.x + packet.drift) / 180) * 18 * window.devicePixelRatio;
      if (!reduceMotion) packet.x += packet.speed;
      if (packet.x > width + 40) packet.x = -40;

      ctx.beginPath();
      ctx.arc(packet.x, y, packet.size, 0, Math.PI * 2);
      ctx.fillStyle = packet.color;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(Math.max(0, packet.x - 82 * window.devicePixelRatio), y);
      ctx.lineTo(packet.x, y);
      ctx.strokeStyle = packet.color.replace("0.", "0.1");
      ctx.lineWidth = window.devicePixelRatio;
      ctx.stroke();

      if (index % 5 === 0) {
        ctx.beginPath();
        ctx.arc(packet.x, y, packet.size * 3.2, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(100, 244, 223, 0.06)";
        ctx.lineWidth = window.devicePixelRatio;
        ctx.stroke();
      }
    });

    requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize);
  draw();
}

document.addEventListener("DOMContentLoaded", () => {
  startTypewriter();
  renderExperience();
  renderProjects();
  setupFilters();
  animateMetrics();
  setupReveal();
  setupCanvas();
});

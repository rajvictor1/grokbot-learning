"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Bot,
  Cpu,
  Layers,
  ChefHat,
  Twitter,
  Mail,
  Briefcase,
  Lightbulb,
  ShieldAlert,
  BookOpen,
  Search,
  X,
  ZoomIn,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Zap,
  Plug,
  Lock,
  RefreshCw,
  Award,
  HeartHandshake,
  Target,
  TrendingUp,
  Wallet,
  AlertTriangle,
} from "lucide-react";

const allImages = [
  { file: "codex-clipboard-0665e392-a6ad-4f3a-8f90-655107bc02b7.png", topic: "GrokBot architecture", caption: "Hand-drawn map of the 'Work' tool family: Manus, Genspark, ChatGPT Work, Claude CoWork, Hermes, Perplexity Computer, Grok Bot." },
  { file: "codex-clipboard-1c065917-02aa-4321-835b-337fa118a10a.png", topic: "group chat/standup", caption: "Analogy Bot asks Newsletter Bot to drop 3-4 AI tips so it can turn them into home-kitchen analogies." },
  { file: "codex-clipboard-2c4d8851-e51b-48e5-a296-2e476d361bc6.png", topic: "Newsletter output", caption: "Newsletter Dileep bot partial digest: Astra/Fable benchmark, Spotify Portal → Gemini 2.5 Flash, Shopify E2E stability." },
  { file: "codex-clipboard-2d8d6dc6-18e9-4b5b-b4b4-26fb13ef5a05.png", topic: "X Research bot setup", caption: "X Research for Dileep — clarifying questions before build: source, cadence, teachable criteria, output shape." },
  { file: "codex-clipboard-30b215bd-a102-46f1-8657-30b1bb47565c.png", topic: "GrokBot UI/sidebar", caption: "GrokBot sidebar showing the user's bot fleet: Chief of Staff, Newsletter Dileep bot, X Research, Job Scraper, Analogy Bot." },
  { file: "codex-clipboard-338a4c9c-e114-4a12-bbfe-abd7c5255f1e.png", topic: "X connector issue", caption: "X connector fails: 'no_auth_link' — GrokBot cannot pop a fresh Connect card." },
  { file: "codex-clipboard-35a2de41-3ebe-417d-9780-5c6b35cd1fb7.png", topic: "X console setup", caption: "X Developer Console projects: 'Grokbot project' and 'Research' with connected apps." },
  { file: "codex-clipboard-37681390-5f46-43e6-8ed8-1e4394b1b639.png", topic: "ProtonMail login", caption: "ProtonMail sign-in screen inside the GrokBot shared cloud browser." },
  { file: "codex-clipboard-3be213c5-6663-4121-ae2d-23f2054290b5.png", topic: "Newsletter bot setup", caption: "Newsletter Dileep bot hands the shared computer to the user for ProtonMail sign-in." },
  { file: "codex-clipboard-3ecd4170-eb82-4b70-a8eb-7a47590538f8.png", topic: "X console setup", caption: "X Apps listing with DileepAgent connected to Grokbot project and Research." },
  { file: "codex-clipboard-45e8947b-bd58-4635-8014-18052ad3ac8e.png", topic: "marketplace/plugins", caption: "GrokBot marketplace plugins: Gmail, Google Calendar, Drive, Granola, Notion, Slack, HeyGen." },
  { file: "codex-clipboard-472fce04-1991-48c9-a55b-6476613374bc.png", topic: "Analogy Bot setup", caption: "Prompt to build the Analogy Bot: cooking/food analogies for AI concepts, global and lightly humorous." },
  { file: "codex-clipboard-49448083-549c-4297-bd22-5f0e2b5520c5.png", topic: "X console setup", caption: "Simplified explanation: on console.x.com you need a Project and an App inside that Project." },
  { file: "codex-clipboard-61908d80-0424-48e3-9364-3882ccf29daf.png", topic: "Analogy Bot setup", caption: "First Analogy Bot prompt: 'I am extremely well known and famous for my analogies...'" },
  { file: "codex-clipboard-6e9a8f68-b143-4b61-b823-97be0e7e0984.png", topic: "chief of staff creation", caption: "Chief of Staff Dileep routes the user request to X Research bot." },
  { file: "codex-clipboard-761731b7-9d71-4f79-b18f-aaa2e5ded246.png", topic: "X Research bot setup", caption: "X Research locked selections: @satyadileep home timeline, always ≥10 tips." },
  { file: "codex-clipboard-7d4bcb22-3363-4bc1-91bf-46739e284419.png", topic: "marketplace/plugins", caption: "GrokBot marketplace full view with Plugins and Bots tabs." },
  { file: "codex-clipboard-7e49a53a-e5e3-4f39-bf65-7a0b0bd57039.png", topic: "marketplace/plugins", caption: "Marketplace plugin categories and connector list." },
  { file: "codex-clipboard-8165bbfa-5eb9-41d4-a71c-8ecb157d88d9.png", topic: "chief of staff creation", caption: "Chief of Staff Dileep created: owns intake, routes to specialists, pulls user in on irreversible actions." },
  { file: "codex-clipboard-94cef110-664f-4f9d-80f3-511fd700416a.png", topic: "design rules", caption: "Build order: the four things you give a GrokBot — Context, Connections, Capabilities, Cadence." },
  { file: "codex-clipboard-a3ae817a-1adf-4e83-be50-8987a2eb7bde.png", topic: "X console setup", caption: "X Apps page: DileepAgent, Last30Days_Dileep, Personal_Wiki_Dileep, BioExtract." },
  { file: "codex-clipboard-afc928db-2400-4466-bf96-de648cc739f6.png", topic: "design rules", caption: "Detailed 4 Cs: Context = who you are; Connections = plugins/logins; Capabilities = repeatable skills; Cadence = scheduled routines." },
  { file: "codex-clipboard-b1044c3f-b61b-4fb9-be5e-d016b5764806.png", topic: "pricing", caption: "GrokBot pricing: minimum $30 plan, Cursor Ultra $200 bundle." },
  { file: "codex-clipboard-b8d4e3a5-7c7e-4124-97b5-931b596c1258.png", topic: "feedback loop", caption: "Analogy Bot results using chef-school terms: reduction, paring knife." },
  { file: "codex-clipboard-bce12bff-8341-4c66-81cd-73bafc59a309.png", topic: "feedback loop", caption: "User feedback: 'global cooking terms like reduction or paring knife will be lost in the Asian subcontinent.'" },
  { file: "codex-clipboard-bd27c9ef-7fa8-4ca7-a2ab-84ec5c38eb9e.png", topic: "GrokBot architecture", caption: "Hand-drawn org chart: CEO / Main Agent with CMO, CRO, COO and specialist bots." },
  { file: "codex-clipboard-c4fa9dbb-8f8d-4a14-a514-1eb21e9f369c.png", topic: "Analogy Bot setup", caption: "User asks Analogy Bot: 'use haiku for simple tasks, and opus for the difficult tasks — suggest analogies.'" },
  { file: "codex-clipboard-d20642f0-66ae-40f1-8a3b-8e03a3c6af83.png", topic: "X console setup", caption: "User confirms: 'new project is grokbot project, under that app is Dileep Agent.'" },
  { file: "codex-clipboard-d65facbd-4b21-4ba6-812a-eb7cece681ef.png", topic: "Newsletter output", caption: "Newsletter digest output: 'Last Week in AI #343' and 'Exponential View' takeaways." },
  { file: "codex-clipboard-d6af4a83-90aa-43ab-bae2-e14a0664a9c1.png", topic: "Newsletter bot setup", caption: "Newsletter Dileep bot checking ProtonMail connector vs browser login." },
  { file: "codex-clipboard-d6bf76d4-117a-41b5-a4c5-3b4bab642c96.png", topic: "Newsletter output", caption: "Newsletter bot extracting teaching takeaways from emails in batches." },
  { file: "codex-clipboard-db4b1d27-9d62-4f54-a3e7-482c92a350e6.png", topic: "Job Scraper bot", caption: "Job Scraper bot live, pulling AI generalist roles from public boards and career pages." },
  { file: "codex-clipboard-dc18fc50-a987-4009-aaad-a21303bf7540.png", topic: "group chat/standup", caption: "Analogy Bot receives 4 tips from Newsletter Bot and picks 3 to turn into analogies." },
  { file: "codex-clipboard-e0a31d92-7dfe-406d-bd14-c333fac5d938.png", topic: "GrokBot architecture", caption: "Hand-drawn shared computer diagram: one cloud machine, multiple bot screens." },
  { file: "codex-clipboard-e20958f7-cb36-4d8e-abb2-7b60f0f3a3e9.png", topic: "Analogy Bot setup", caption: "Analogy Bot is live and ready for the first AI concept." },
  { file: "codex-clipboard-e358d0ee-2f0b-461b-8b69-886148b725b2.png", topic: "Analogy Bot setup", caption: "Chief of Staff sends the Haiku/Opus concept to Analogy Bot." },
  { file: "codex-clipboard-e44b9321-b47b-4e09-92c2-e76913b2c8db.png", topic: "feedback loop", caption: "Updated Haiku/Opus analogies using everyday kitchen language: microwave, pressure cooker, salt, knife." },
  { file: "codex-clipboard-e86a74e8-0fbf-4332-b785-834e0028494d.png", topic: "Newsletter output", caption: "Newsletter output categories: AI tips, something to learn, other important non-AI." },
  { file: "codex-clipboard-f01365a9-19d5-44c2-b51d-f5236be40aee.png", topic: "ProtonMail login", caption: "ProtonMail inbox loading inside GrokBot's cloud browser after sign-in." },
  { file: "codex-clipboard-f12008d7-6683-4e8b-8484-7eecf417ff2e.png", topic: "Newsletter output", caption: "Newsletter digest final section with non-AI items and Proton purchase confirmation." },
  { file: "codex-clipboard-f298aa39-16c3-4552-9371-a841a68ffe58.png", topic: "Job Scraper bot", caption: "Chief of Staff routing job-search request to the Job Scraper bot." },
  { file: "codex-clipboard-f8c1f6d9-ed8c-4541-bf9c-d3e4a504eab5.png", topic: "marketplace/plugins", caption: "Build menu: Teach a task, Attach files, and Marketplace connectors." },
];

const lessons = [
  {
    id: "intro",
    title: "Start here",
    icon: BookOpen,
    summary: "GrokBot is a member of a larger family of tools that do work, not just chat. This guide shows how to start with the right mindset, build a Chief of Staff bot, then add specialist scouts.",
    images: [1, 26, 34],
    highlight: "Stop comparing bots. Start testing them. Build a Chief of Staff first, then add task-based specialists.",
    content: [
      "GrokBot is one member of the 'Work' family: Manus, Genspark, OpenClaw, ChatGPT Work, Claude CoWork, Hermes, Perplexity Computer, and Grok Bot.",
      "Chat tools return paragraphs. Work tools return changed documents, reports, files, and actions.",
      "The question is not 'which bot is better?' It is 'which tool have I tested thoroughly for my own workflow?'",
      "This live session built a personal agent fleet: Chief of Staff + X Research Scout + Newsletter Scout + Job Scraper + Analogy Bot.",
      "All of these tools are trying to become your personal agent. The user experience differs; the underlying pattern is the same.",
    ],
  },
  {
    id: "mindset",
    title: "Tool mindset",
    icon: Lightbulb,
    summary: "Don't chase hype. GrokBot, Claude, Codex, and ChatGPT Work can all do the same job. Pick based on your own testing and cost experience.",
    images: [],
    highlight: "Same harness, different UX. Test before you switch. Cost and experience matter more than brand noise.",
    content: [
      "Ignore internet noise like 'GrokBot is king, Claude is dead, Codex is dead.' Nobody dies; nobody lives forever.",
      "Tool choice depends on perspective, thorough testing, and cost — not absolute use-case superiority.",
      "GrokBot's standout edge is user experience: clean interface, fewer buttons, and a cloud computer that runs while your laptop is closed.",
      "To replicate a GrokBot fleet in Claude CoWork, build sub-agents inside CoWork using skills or agent definitions.",
      "Cost effectiveness is hard to estimate upfront. Experiment and compare your own usage.",
      "Example stack: 50% Codex/ChatGPT Work for scraping + 50% Claude for synthesis. Build resources in Codex, then pass them to Claude for storyline and structure.",
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: Cpu,
    summary: "One cloud machine per account. Every bot gets a screen. Memory is persistent and shared, which unlocks power but creates real security risks.",
    images: [26, 34, 1],
    highlight: "One account = one cloud CPU. Multiple bot screens. Shared logins, files, and memory.",
    content: [
      "Every bot has a job, memory, conversation, and screen.",
      "One GrokBot account = one cloud machine. Each bot gets its own screen, like multiple monitors on one CPU.",
      "It runs with your laptop closed because the work happens in the cloud, not on your device.",
      "Memory is persistent: global memory is shared across bots; local memory is tied to one bot.",
      "If you tell one bot 'I am Dilip, AI journalist,' every other bot on the account knows it too.",
      "Memory compaction happens automatically at points you cannot control, chosen to keep the product simple for non-technical users.",
      "Security risk: if a finance bot has bank access, other bots may reach the same session and files. They are not isolated.",
    ],
  },
  {
    id: "design",
    title: "4-C design rule",
    icon: Zap,
    summary: "Build bots in this order: Context → Connections → Capabilities → Cadence. Start simple. Convert learnings into skills only after real use.",
    images: [20, 22],
    highlight: "Context before Connections. Capabilities before Cadence. Don't build skills on day one.",
    content: [
      "Context: who you are, what you run, and how you decide.",
      "Connections: plugins and browser logins.",
      "Capabilities: skills the bot can repeat.",
      "Cadence: routines that run on schedule or event.",
      "The bare minimum is Context + Connections. Add Capabilities only after you have tested the bot.",
      "Don't build skills immediately. Build a simple bot, run it, correct the output, and only then ask it to save the procedure as a skill.",
      "A skill is a saved procedure. GrokBot will extract the steps from previous memory and present them as a reusable skill.",
      "You can download skills from Claude/Codex and upload them into GrokBot; they install automatically and are shared across bots unless restricted.",
    ],
  },
  {
    id: "cos",
    title: "Chief of Staff",
    icon: Bot,
    summary: "Build a Chief of Staff bot as your routing layer. It owns intake, clarifies tasks, sends work to specialist scouts, and pulls you in before irreversible actions.",
    images: [19, 15],
    highlight: "You = CEO. Chief of Staff = router. Specialists = scouts. Human approval = irreversible actions.",
    content: [
      "Recommended pattern: You are the CEO / Main Agent. Chief of Staff is the routing layer. Specialists do the actual work.",
      "The Chief of Staff's only job: take user requests and route them to the right specialist.",
      "For irreversible actions — send, post, pay, delete, publish, anything a customer sees — pull the human back into the loop.",
      "For reversible work — drafts, research, file tagging — let the bot finish alone.",
      "Example org chart: CMO → SEO/Ad/Data bots; CRO → Revenue/Data bots; COO → Customer-support bot.",
      "Some users run daily or weekly stand-ups where each specialist bot reports what it completed.",
      "Start micromanaging; give more freedom only after output becomes consistent.",
    ],
  },
  {
    id: "specialists",
    title: "Specialist design",
    icon: Layers,
    summary: "Design specialists around the task and context, not the tool. A meeting action-items bot needs Granola + Gmail, not a 'Granola bot'.",
    images: [],
    highlight: "Build 'X Research Scout for my teaching style,' not an 'X bot.' Task first. Tool second.",
    content: [
      "Bad specialist names: 'X bot', 'Gmail bot', 'Granola bot'.",
      "Good specialist names: 'X Research Scout for my teaching style', 'Newsletter Research Scout', 'Analogy Builder Bot', 'Job Scraper tuned to me'.",
      "One specialist agent does one task, defined by context, not by the underlying tool.",
      "A meeting action-items bot needs both Granola (meeting notes) and Gmail (email follow-ups) because action items flow from both.",
      "Choose one scout for one source. Run and correct it at least five times before converting it to a skill or scheduling it.",
    ],
  },
  {
    id: "xbot",
    title: "X Research Scout",
    icon: Twitter,
    summary: "A tailored X scout reads your timeline and returns teachable AI tips. It asks clarifying questions before building and can hit real beta connector issues.",
    images: [4, 16, 13, 7, 21, 28, 6],
    highlight: "Clarify before building. ≥10 tips. Exclude hype. Fix connector issues via X console project + app.",
    content: [
      "Goal: pull @satyadileep home timeline, return ≥10 teachable AI tips on demand.",
      "Exclusions: fundraising, hiring, memes, pure news, release hype without how-to.",
      "Output per item: tip + why learners should care + tweet content (expand replies if the tip is in a reply).",
      "Audience: mix of consumer and enterprise learners.",
      "X connector failed during the live session due to backend changes — a real beta issue.",
      "Fix: create a project on console.x.com, create an app inside it (not floating), then remove/re-add the X connector.",
      "Fallback if connector still fails: use the shared cloud browser if you are already logged into X.",
    ],
  },
  {
    id: "newsletter",
    title: "Newsletter Scout",
    icon: Mail,
    summary: "Reads your newest 25 ProtonMail emails and sorts them into AI tips, something to learn, and other important non-AI content. First run requires manual browser login.",
    images: [30, 8, 39, 9, 31, 3, 29, 38, 40],
    highlight: "No ProtonMail plugin? Open shared browser, sign in once, session persists for later runs.",
    content: [
      "Goal: log into ProtonMail, read the last 25 emails, and bucket them into AI tips, something to learn, and other important non-AI content.",
      "No native ProtonMail connector exists, so GrokBot opens the shared cloud browser and asks the user to sign in once.",
      "The browser session persists on the shared computer, so later runs can reuse the login.",
      "ProtonMail may challenge the automated browser with a human-verification screen.",
      "The bot reads emails in batches and extracts teaching takeaways, skipping empty fluff.",
      "Once output is consistent, save the corrected procedure as a skill and schedule it to run on cadence.",
    ],
  },
  {
    id: "job",
    title: "Job Scraper Scout",
    icon: Briefcase,
    summary: "Finds AI generalist roles suited to your profile from public boards and career pages. Extend reach with the Apify connector.",
    images: [32, 41],
    highlight: "Pull from public boards first. Use Apify in the marketplace for deeper, targeted scraping.",
    content: [
      "Goal: return AI generalist jobs suited to the user's profile.",
      "Pulls from public job boards and company career pages.",
      "First run surfaced roles at Capital One, Takeon, Sarvam, Match Group, Juniper Square.",
      "For deeper scraping, connect Apify from the marketplace and instruct it to target specific sites.",
      "Route the request through the Chief of Staff; the Job Scraper scout returns results directly.",
    ],
  },
  {
    id: "analogy",
    title: "Analogy Builder",
    icon: ChefHat,
    summary: "Turns AI concepts into everyday cooking/food analogies for global learners. The feedback loop transformed chef-school output into kitchen language anyone understands.",
    images: [14, 12, 27, 36, 35, 24, 25, 37, 2, 33],
    highlight: "First output was chef-school. Feedback made it everyday and human-like. Feedback is the real lock-in.",
    content: [
      "Goal: take an AI concept or tip and return 3-5 cooking/food analogies, lightly humorous, for global learners.",
      "First Haiku/Opus analogies used chef-school terms: reduction, paring knife.",
      "User feedback: those terms get lost in the Asian subcontinent; use everyday kitchen language instead.",
      "Regenerated with microwave, pressure cooker, salt, knife — concepts that land across cultures.",
      "Feedback loop example: 'It feels very slop-first content. Can you make it more human-like?'",
      "Final human-like output: 'You are cleaning the fridge at midnight. Rule one: nothing goes in the bin.'",
      "The more feedback you give, the better the bot's memory gets — that is what locks you into a tool, not exported context.",
    ],
  },
  {
    id: "collab",
    title: "Bots talking to bots",
    icon: MessageSquare,
    summary: "GrokBot lets specialist bots message each other in group chats. Chief of Staff can run stand-ups and cross-bot workflows.",
    images: [2, 33],
    highlight: "Newsletter Scout → Analogy Bot. X Research + Newsletter → Analogy Bot. Cross-bot workflows in minutes.",
    content: [
      "Bots can message each other directly inside GrokBot.",
      "Example workflow: Newsletter Bot drops 3-4 AI tips to Analogy Bot, which turns them into home-kitchen analogies.",
      "Another workflow: Chief of Staff asks X Research + Newsletter to produce 5 AI tips together for analogies.",
      "Chief of Staff can run daily or weekly stand-ups where each specialist reports what it did.",
      "For engineers: GrokBot can spin up Cursor cloud agents — front-end bot, back-end bot, system-design bot working together for vibe coding.",
    ],
  },
  {
    id: "marketplace",
    title: "Plugins & skills",
    icon: Plug,
    summary: "Marketplace plugins are limited to what GrokBot offers; use ComposeU for external tools. Skills are shared across all bots unless restricted.",
    images: [17, 18, 11, 42],
    highlight: "Plugins are account-wide. For tools outside the marketplace, use ComposeU. Import Claude/Codex skills by upload.",
    content: [
      "GrokBot marketplace has plugins like Gmail, Calendar, Drive, Granola, Notion, Slack, and HeyGen, plus a bots marketplace.",
      "You can only connect plugins that GrokBot offers. For other tools, use ComposeU as a bridge.",
      "Plugins are account-wide: once connected, every bot can use them.",
      "Skills are shared across every bot by default. You can restrict a skill to one bot if needed.",
      "Three ways to add skills: ask the bot to save current behavior, invoke an existing skill, or install a connector that brings skills automatically.",
      "Imported 'No AI Slop' skill from Claude — a variation of Peter Yang's skill, ~50% rewritten to match the user's voice.",
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: ShieldAlert,
    summary: "Shared computer = shared logins and files. Never paste passwords in chat. Use plugins when possible; otherwise manual browser login. Require approval for irreversible actions.",
    images: [8, 39],
    highlight: "Never paste passwords in chat. Don't save creds in browser. Plugins > browser login > file-based creds.",
    content: [
      "Use plugins wherever available. They are account-wide and safer than browser logins.",
      "If no plugin exists, log in once via the shared cloud browser. Do not save username/password in the browser.",
      "Never paste passwords into chat. Put credentials in a file and tell the bot to read the file, or log in manually.",
      "One cloud machine means bots share browser logins, files, and workspace. Deleting a bot does not automatically clear its session.",
      "The shared computer keeps logins even after a bot is deleted.",
      "Reversible work (drafts, research, file tagging): let the bot finish alone.",
      "Irreversible work (send, post, pay, delete, publish, anything a customer sees): always require human approval.",
      "Start micromanaging. Give more autonomy only after output is consistent.",
      "The product is in beta; security considerations are still evolving.",
    ],
  },
  {
    id: "usage",
    title: "Usage & billing",
    icon: Wallet,
    summary: "GrokBot usage is weekly and finite. Check Settings → Usage and Billing. On-demand limits are managed via the Cursor dashboard.",
    images: [23],
    highlight: "Weekly meter. Check usage in Settings. Ultra plan used here. Add credit card in Cursor dashboard for on-demand usage.",
    content: [
      "GrokBot usage is weekly and finite, reset every week based on your plan.",
      "Check current usage in Settings → Usage and Billing.",
      "Pricing starts at $30/month; Cursor Ultra ($200) bundles GrokBot access.",
      "On-demand usage limits are managed through the Cursor dashboard; add a credit card there.",
      "GrokBot cannot be used inside Cursor, but you can log in via Cursor and use it as needed.",
      "Cost differs by tool and workload; experiment to find the most effective setup for you.",
    ],
  },
  {
    id: "fallback",
    title: "Fallbacks & cadence",
    icon: RefreshCw,
    summary: "Use Grok Imagine for visuals inside the Grok ecosystem. Ask your harness for 'how-to' questions. Schedule bots only after skills are stable.",
    images: [],
    highlight: "Grok Imagine for images. Harness has internet search. Schedule only after 5+ successful runs.",
    content: [
      "If GrokBot can't build something, use Grok Imagine as a fallback for images and visuals.",
      "GrokBot ecosystem access is strong; outside access is weaker.",
      "Ask your Chief of Staff or harness 'how do I do X?' — it has internet search and can coach you.",
      "Example routine: 'Every weekday, pull X tips and drop them here.'",
      "Recommended cadence: create Chief of Staff, design one scout, run and correct it at least five times, save as a skill, then schedule.",
      "Continuous feedback improves memory and locks you into the workflow more than exported context ever could.",
    ],
  },
  {
    id: "coding",
    title: "Coding agents",
    icon: Target,
    summary: "GrokBot can spin up Cursor cloud agents. A coding bot in GrokBot is essentially a Cursor agent powered by Grok models.",
    images: [],
    highlight: "Coding bot = Cursor cloud agent inside GrokBot. Grok 4.6 trained on Cursor data; 4.7 will add SpaceX engineering data.",
    content: [
      "A GrokBot coding bot spins up Cursor cloud agents underneath.",
      "You can build a front-end bot, a back-end bot, and a system-design bot that coordinate with each other.",
      "This enables vibe coding with multiple agents working in parallel.",
      "Grok 4.6 has been trained on Cursor data; Grok 4.7 is expected to include SpaceX engineering data.",
      "Coding tasks are likely to become a strong suit for GrokBot because of this lineage.",
    ],
  },
  {
    id: "summary",
    title: "Summary",
    icon: Award,
    summary: "Start with a Chief of Staff, add task-based scouts, iterate with feedback, convert to skills, then schedule. Always watch security and usage limits.",
    images: [],
    highlight: "Chief of Staff first. Five runs per scout. Skill it. Schedule it. Keep irreversible actions human-approved.",
    content: [
      "Pick tools after testing, not because of hype.",
      "Start with a Chief of Staff bot, then add task-based specialist scouts.",
      "Use the 4-C order: Context → Connections → Capabilities → Cadence.",
      "Run each scout at least five times and give feedback before saving it as a skill.",
      "Schedule routines only after the skill produces consistent output.",
      "Let bots talk to each other for cross-bot workflows and stand-ups.",
      "Use plugins when available; otherwise browser login. Never paste passwords in chat.",
      "Require approval for irreversible actions; give more freedom only after consistency is proven.",
      "Remember: shared cloud machine = shared logins, files, and memory.",
      "Monitor weekly usage and plan limits in Settings.",
    ],
  },
];

const topicFilters = Array.from(new Set(allImages.map((i) => i.topic)));

export default function Home() {
  const [activeId, setActiveId] = useState("intro");
  const [search, setSearch] = useState("");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const activeLesson = useMemo(
    () => lessons.find((l) => l.id === activeId) || lessons[0],
    [activeId]
  );

  const filteredLessons = useMemo(
    () =>
      lessons.filter(
        (l) =>
          l.title.toLowerCase().includes(search.toLowerCase()) ||
          l.summary.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const galleryImages = useMemo(() => {
    if (filter) return allImages.filter((i) => i.topic === filter);
    return allImages;
  }, [filter]);

  useEffect(() => {
    document.title = "GrokBot Learning — KVS Dileep | Created by Rajesh Kumar";
  }, []);

  const scrollToLesson = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(`lesson-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const nextLesson = () => {
    const idx = lessons.findIndex((l) => l.id === activeId);
    if (idx < lessons.length - 1) scrollToLesson(lessons[idx + 1].id);
  };
  const prevLesson = () => {
    const idx = lessons.findIndex((l) => l.id === activeId);
    if (idx > 0) scrollToLesson(lessons[idx - 1].id);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="lg:w-80 lg:h-screen lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-900/50 backdrop-blur flex flex-col z-40">
        <div className="p-5 lg:p-6 border-b border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-sky-500">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg lg:text-xl tracking-tight">GrokBot Learning</h1>
              <p className="text-[10px] lg:text-xs text-slate-400">
                Trainer:{" "}
                <a
                  href="https://www.linkedin.com/in/k-v-s-dileep/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  KVS Dileep
                </a>
              </p>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 hidden lg:block leading-relaxed">
            A step-by-step storyboard from a live GrokBot masterclass. Created by{" "}
            <a
              href="https://www.linkedin.com/in/rajesh-demand-gen-gtm-expert/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 hover:underline"
            >
              Rajesh Kumar
            </a>.
          </p>
        </div>

        <div className="p-3 lg:p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Find a lesson..."
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 lg:px-3 pb-4 space-y-1">
          {filteredLessons.map((l) => {
            const Icon = l.icon;
            const isActive = activeId === l.id;
            return (
              <button
                key={l.id}
                onClick={() => scrollToLesson(l.id)}
                className={`w-full flex items-start gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all text-left ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500/15 to-transparent border-r-[3px] border-orange-500 text-white"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-snug">{l.title}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800 text-[10px] text-slate-500 hidden lg:block leading-relaxed">
          {allImages.length} screenshots · {lessons.length} lessons · brandops.site
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 px-6 py-16 lg:py-28">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          <div className="relative max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <Zap className="w-3 h-3" /> Live Masterclass
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3 h-3" />{" "}
                <a href="https://www.linkedin.com/in/k-v-s-dileep/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Trainer: KVS Dileep
                </a>
              </span>
            </div>
            <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
              Build Your Own GrokBot Fleet
            </h2>
            <p className="text-lg lg:text-2xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              A visual, screenshot-backed storyboard from a live GrokBot session. Learn the mindset,
              architect a Chief of Staff, add specialist scouts, and make them talk to each other.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollToLesson("intro")}
                className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-900/20"
              >
                Start the journey
              </button>
              <button
                onClick={() => scrollToLesson("summary")}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                Jump to summary
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur">
                <Cpu className="w-6 h-6 text-orange-400 mb-2" />
                <h4 className="font-semibold text-slate-100">Cloud Computer</h4>
                <p className="text-xs text-slate-400 mt-1">Runs with your laptop closed.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur">
                <Bot className="w-6 h-6 text-sky-400 mb-2" />
                <h4 className="font-semibold text-slate-100">Routing Layer</h4>
                <p className="text-xs text-slate-400 mt-1">Chief of Staff delegates work.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur">
                <Layers className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="font-semibold text-slate-100">Specialist Scouts</h4>
                <p className="text-xs text-slate-400 mt-1">X, Newsletter, Job, Analogy bots.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-10 space-y-24">
          {lessons.map((lesson, idx) => {
            const Icon = lesson.icon;
            return (
              <section
                key={lesson.id}
                id={`lesson-${lesson.id}`}
                className="scroll-mt-6"
                onMouseEnter={() => setActiveId(lesson.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Lesson {idx + 1}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">{lesson.title}</h3>
                  </div>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed mb-5">{lesson.summary}</p>

                <div className="p-4 lg:p-5 rounded-xl bg-gradient-to-r from-orange-500/10 to-sky-500/5 border border-orange-500/20 mb-6">
                  <div className="flex gap-3">
                    <HeartHandshake className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Digestible Highlight</span>
                      <p className="text-slate-200 font-medium mt-1 leading-relaxed">{lesson.highlight}</p>
                    </div>
                  </div>
                </div>

                {lesson.content.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {lesson.content.map((point, pidx) => (
                      <li key={pidx} className="flex gap-3 text-slate-300 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {lesson.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    {lesson.images.map((imgIdx) => {
                      const img = allImages[imgIdx - 1];
                      return (
                        <button
                          key={imgIdx}
                          onClick={() => setLightbox(imgIdx - 1)}
                          className="group text-left bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all hover:shadow-xl hover:shadow-orange-900/10"
                        >
                          <div className="relative aspect-video bg-slate-950 overflow-hidden">
                            <img
                              src={`/images/${img.file}`}
                              alt={img.caption}
                              loading={idx < 2 ? "eager" : "lazy"}
                              decoding="async"
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
                            </div>
                          </div>
                          <div className="p-4">
                            <span className="text-[10px] uppercase tracking-wider font-semibold text-orange-400">
                              {img.topic}
                            </span>
                            <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                              {img.caption}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                <div className="flex justify-between items-center pt-4 border-t border-slate-800/60">
                  <button
                    onClick={prevLesson}
                    disabled={idx === 0}
                    className="flex items-center gap-1 text-sm text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </button>
                  <button
                    onClick={nextLesson}
                    disabled={idx === lessons.length - 1}
                    className="flex items-center gap-1 text-sm text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </section>
            );
          })}

          {/* Full gallery */}
          <section className="border-t border-slate-800 pt-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">All session screenshots</h3>
                <p className="text-sm text-slate-400">
                  {filter ? `Showing ${galleryImages.length} shots tagged '${filter}'` : `Browse all ${allImages.length} screenshots`}
                </p>
              </div>
              <select
                value={filter || ""}
                onChange={(e) => setFilter(e.target.value || null)}
                className="bg-slate-800 border border-slate-700 text-sm rounded-lg px-3 py-2 text-slate-200"
              >
                <option value="">All topics</option>
                {topicFilters.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightbox(allImages.indexOf(img))}
                  className="group text-left bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-orange-500/50 transition-all"
                >
                  <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                    <img
                      src={`/images/${img.file}`}
                      alt={img.caption}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Maximize2 className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-orange-400">
                      {img.topic}
                    </span>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{img.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-800 mt-20 py-12 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
            <div>
              <h4 className="font-bold text-white mb-1">GrokBot Learning</h4>
              <p className="text-sm text-slate-400">
                Masterclass by{" "}
                <a
                  href="https://www.linkedin.com/in/k-v-s-dileep/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  KVS Dileep
                </a>
                {" "}· Created by{" "}
                <a
                  href="https://www.linkedin.com/in/rajesh-demand-gen-gtm-expert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  Rajesh Kumar
                </a>
                {" "}· {allImages.length} screenshots
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">
                ©{" "}
                <a
                  href="https://brandops.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 hover:underline"
                >
                  brandops.site
                </a>
                {" "}· Built by{" "}
                <a
                  href="https://www.linkedin.com/in/rajesh-demand-gen-gtm-expert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 hover:underline"
                >
                  Rajesh Kumar
                </a>
              </p>
              <p className="text-[10px] text-slate-600 mt-1">September 2026</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox > 0 ? lightbox - 1 : allImages.length - 1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox < allImages.length - 1 ? lightbox + 1 : 0);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div
            className="max-w-5xl w-full max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/images/${allImages[lightbox].file}`}
              alt={allImages[lightbox].caption}
              className="w-full h-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-wider font-semibold text-orange-400">
                {allImages[lightbox].topic}
              </span>
              <p className="text-sm text-slate-300 mt-1">{allImages[lightbox].caption}</p>
              <p className="text-xs text-slate-500 mt-2">
                {lightbox + 1} / {allImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

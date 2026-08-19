# SkyPilot — 公司成立、$20M 种子轮与 SkyPilot Platform 发布

> Source: 多来源（官网 skypilot.ai、官方博客 skypilot.ai/blog/skypilot-the-company、Fortune、Yahoo Finance/Pulse 2.0/Crypto Briefing 融资报道、Nebius/CoreWeave/AWS/Crusoe 博客、GitHub skypilot-org/skypilot）
> Collected: 2026-08-17
> Published: 2026-07-21（公司成立与融资公告）

## 公司公告（官方博客，作者 Zongheng Yang，2026-07-21）

标题：《Accelerating custom intelligence: Announcing SkyPilot Platform and our $20M funding》

- 融资金额：over $20M（超过 2000 万美元），round led by Lux。
- 参投机构：Amplify、Coatue、Foundation、Race、The House Fund。
- 天使投资人（点名）：Ali Ghodsi（Databricks CEO）、Jeff Dean（Google 首席科学家）、Guillermo Rauch（Vercel CEO）、Amjad Masad（Replit CEO）、Clem Delangue（HuggingFace CEO）等。
- 创始人署名「— Zongheng, Romil, Zhanghao, Ion, Scott」，正文给出 Zongheng Yang（Co-founder & CEO）全名。
- 出身：Zongheng Yang 自述「Shortly before ChatGPT's release, I was a PhD researcher at Berkeley in the lab that incubated Databricks and Spark」；实验室因 AWS 免费算力而受限，GPU 争抢出现 no-capacity errors，同时有 GCP、Azure 与「specialized clouds」额度却因 10-step setup 与 workload/state 迁移成本而无人使用；团队由此提出「Can we build a system to unify all our compute into a single pool — a 'sky' of cloud compute?」并开源开发 SkyPilot。
- 开源数据：top deployments 1000+ nodes 与 10,000+ GPUs；GPU hours 35% MoM 增长、6 个月 6 倍；14M+ downloads（近 3 个月约 6M）；280+ contributors。
- SkyPilot Platform：面向 frontier AI teams 的 AI compute platform，BYOC、跨 neoclouds 与 hyperscalers 统一 GPU 池，覆盖 AI-native devboxes、大规模训练（1000+ node hero runs）、RL/agents 沙箱、生产多集群 serving，以及 HA、team/quota、SSO/RBAC、SOC 2；自述比开源快 20x，部分客户管理 10K+ GPU、支持 200+ researchers。
- 客户口径：Abridge、Applied Compute、H Company、Nubank；云合作方：Nebius、CoreWeave、Lambda、AWS。

## 官方网站 skypilot.ai（2026-08-17 抓取）

- 定位「The AI Compute Platform」／「One platform for all your AI compute – Kubernetes, Slurm, 20+ clouds」。
- 产品两块：开源 SkyPilot（docs.skypilot.ai）与商业 SkyPilot Platform（docs-platform.skypilot.ai）。
- 企业能力清单含 BYOC/BYOK、private VPCs/airgapped、SOC 2 Type II、SSO、RBAC、Workspaces、quotas、cost management/reporting、GPU healthchecks、priority queueing、GPU sharing、auto-stop idle compute、multi-cluster scheduling。
- 官网列举客户/logo：Nubank、NVIDIA、Meta、Amazon Robotics、Point 72、Mistral、Applied Compute、Archer、Unconventional AI、H Company、Abridge、Hippocratic AI、Shopify、HeyGen、Redis、CoreWeave、Lambda、Nebius、Together AI 等。
- 近期博客：2026-07-21 融资公告；2026-07-04 Abridge 案例；2026-06-24 H Company 案例；2026-03-18「Scaling Karpathy's Autoresearch」。

## 第三方报道（2026-07-21 集中发布）

- Fortune：《SkyPilot, from Databricks' cofounder, raises $20M to be the Switzerland of AI compute》（标题点出「Databricks cofounder」即 Ion Stoica 与「Switzerland of AI compute」定位）。
- Yahoo Finance：《SkyPilot Launches with $20M to Accelerate Custom Intelligence for Frontier AI Teams》。
- Pulse 2.0：《SkyPilot Raises $20 Million Seed Round To Unify AI Compute Infrastructure》——列出创始人为 UC Berkeley researchers Zongheng Yang、Zhanghao Wu、Romil Bhardwaj，加 Databricks 联合创始人 Ion Stoica 与云/网络研究学者 Scott Shenker；技术源自「years of AI systems research at Berkeley」。
- Crypto Briefing：《SkyPilot raises $20M to simplify AI compute orchestration across clouds》。

## 更早的厂商集成/案例

- Nebius（2025-10-23）：Introducing Managed SkyPilot API Server on Nebius AI Cloud。
- CoreWeave（2025-11-18）：SkyPilot for Multi-Cloud Orchestration。
- AWS（2025-07-11）：Streamline ML workflows with SkyPilot on Amazon SageMaker HyperPod。
- Crusoe（2026-01-13）：Running AI workloads on AMD GPUs with SkyPilot。
- Nebius（2025-01-15）：Orchestrating LLM fine-tuning on K8s with SkyPilot and MLflow。

## GitHub（skypilot-org/skypilot，2026-08-17）

- 描述：「The AI Compute Platform for frontier teams. SkyPilot turns fragmented AI compute into one AI supercomputer, so frontier AI teams build custom intelligence faster.」
- 星数约 10,498；组织内另有 skypilot-tutorial、skypilot-catalog、skypilot-helm 等仓库。

## 人物背景（Zongheng Yang 个人主页 zongheng.me）

- Zongheng Yang：UC Berkeley Sky Computing Lab 博士后研究员；2022 年获 UC Berkeley 计算机博士（导师 Ion Stoica），博士论文获 Jim Gray Dissertation Award Honorable Mention；曾于 Google Brain；2015 年 Berkeley 本科；在 SkyPilot 项目上「building SkyPilot」（framework for running AI and batch jobs on any cloud）。个人主页未提公司实体或融资。
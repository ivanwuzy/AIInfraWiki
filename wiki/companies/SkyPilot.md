# SkyPilot

> Sources: SkyPilot 官方博客（Zongheng Yang，2026-07-21）; skypilot.ai 官网与 GitHub（2026-08-17 抓取）; Fortune、Yahoo Finance、Pulse 2.0、Crypto Briefing（2026-07-21）; Nebius/CoreWeave/AWS/Crusoe 博客; Zongheng Yang 个人主页
> Raw: [SkyPilot 公司成立、$20M 种子轮与 SkyPilot Platform 发布](../../raw/sources/2026-08-17-skypilot-funding-and-platform.md)
> Updated: 2026-08-17

## Overview

SkyPilot 是由 UC Berkeley Sky Computing Lab 走出的「AI 算力统一控制面」公司，把分散在多云、neocloud、Kubernetes、Slurm 与本地 GPU 上的算力抽象成单一池，统一承载开发、预训练、后训练/RL、批量推理与在线服务。2026-07-21 正式以公司身份亮相，开源同名框架 SkyPilot 已有 14M+ 下载、280+ 贡献者；同日发布商业版 SkyPilot Platform，并宣布由 Lux 领投的超过 2000 万美元种子轮。对人形机器人公司，它适合作为「多云 GPU 池 + 训练/推理统一提交」的受控 PoC 与采购验证对象，不应进入实时控制链路，也不应把公司口径的经营数据当作审计供应保障。[来源：本页 Raw]

## 团队与出身

创始团队署名 Zongheng Yang（Co-founder & CEO）、Romil Bhardwaj、Zhanghao Wu、Ion Stoica、Scott Shenker。其中 Ion Stoica 是 Databricks 联合创始人、UC Berkeley 教授（Apache Spark/AMPLab 谱系），Scott Shenker 为分布式系统/网络学者。Zongheng Yang 获 UC Berkeley 计算机博士（导师 Ion Stoica，博士论文获 Jim Gray Dissertation Award Honorable Mention），曾任 Google Brain，现于 Sky Computing Lab。公司技术源自该实验室多年 AI systems 研究，孵化 Databricks 与 Spark 的同一实验室谱系。[来源：本页 Raw]

## 产品与技术边界

开源 SkyPilot 定位「The AI Compute Platform」：统一管理 Kubernetes、Slurm、VM 与 20+ cloud 上的 GPU，覆盖开发、训练、批量推理、沙箱与 endpoint。商业版 SkyPilot Platform 是托管控制面，企业能力含 BYOC/BYOK、私有 VPC/airgapped、SOC 2 Type II、SSO/RBAC、Workspaces、配额与成本管理、GPU 健康检查、优先级队列、GPU sharing、空闲自动停止与多集群调度。公司称部分客户管理 10K+ GPU、支持 200+ researchers，最大开源部署达 1000+ node / 1 万+ GPU，自述比开源快 20x。[来源：本页 Raw]

定位是「控制面」而非「算力供应商」：它不拥有 GPU，也不卖 Token/API/云实例，客户以 BYOC 保留既有云与 GPU 合同，SkyPilot 在其上提供统一发现、配额、计量、作业提交、迁移/恢复与治理。GPU 转售比例、供应商名单、统一 SLA、故障赔偿与硬件支持矩阵未公开，须以合同和实测核验。[来源：本页 Raw]

## 商业、资本与关系边界

2026-07-21 公告融资 over $20M，Lux 领投，Amplify、Coatue、Foundation、Race、The House Fund 参投；天使投资人含 Ali Ghodsi（Databricks CEO）、Jeff Dean（Google 首席科学家）、Guillermo Rauch（Vercel CEO）、Amjad Masad（Replit CEO）、Clem Delangue（HuggingFace CEO）。Fortune 报道标题为「SkyPilot, from Databricks' cofounder, raises $20M to be the Switzerland of AI compute」，点出 Ion Stoica 背书与「AI 算力的瑞士」中立定位。客户/logo 含 Nubank、NVIDIA、Meta、Amazon Robotics、Mistral、Shopify、CoreWeave、Lambda、Nebius、Together AI 等；具名案例为 Abridge、H Company、Nubank、Applied Compute，云合作方为 Nebius、CoreWeave、Lambda、AWS。上述均为公司口径，不能推导为订单金额、生产流量、续约留存或软件毛利。[来源：本页 Raw]

## 机器人战略与行动建议

- **采购／合作：** 以「自有 VPC/集群 + 多云 + SkyPilot」对照，跑相同的训练/仿真/评测/批量推理负载，验收 P95 作业完成率、故障恢复、有效 GPU 利用率、单位有效算力成本与数据驻留；SkyPilot 的多云调度对「仿真 agent、数据/轨迹处理、离线后训练」等非实时负载价值最高。
- **自研边界：** 保留数据集版本、reward、环境、模型权重、评测与 checkpoint 的供应商无关基线，验证向自有集群迁出的许可证与依赖安全；实时控制、设备端运行时与安全闭环不入其管辖。
- **投资／并购：** 当前仅观察，不建议整体并购。资本动作前应核验经审计 ARR/毛利、产品收入拆分、供应协议、供应商集中度、cap table 与团队/开源资产权属；Ion Stoica 与 Databricks 谱系是正面信号，但不构成供应落地或中立性保证。[来源：本页 Raw]

## 分类

- 主类型：[4.4 多来源算力资源池化与控制面](../segments/4.4-多来源算力资源池化与控制面.md)（中高置信）：客户购买的是跨 20+ 云、Kubernetes、Slurm 与本地 GPU 的统一发现、池化、配额、计量、切换与治理——非 GPU 实例或 Token，符合 4.4 的准入条件；与 Prime Intellect 的「GPU 聚合」相比，SkyPilot 的交付重心明确是平台控制面而非算力转售。
- 次类型：[4.1 跨厂商训推算力调度平台](../segments/4.1-跨厂商训推算力调度平台.md)（中等置信）：开源与 Platform 均统一承载训练、批量推理与在线服务的作业提交、资源编排、迁移/恢复与治理，且支持 NVIDIA/AMD/TPU 多加速器；但「跨厂商 XPU」的版本化支持矩阵与跨 XPU 生产 SLO 主要靠文档与案例支撑，未公开独立基准。
- 不设其他正式次分类：它不是分布式训练算法工具（5.3）、不是推理运行时/引擎（5.2）、不是单集群队列/工作流（3.5），也不出售 Token/API/GPU 实例（8.1）。[来源：本页 Raw]

## 冲突与不确定性

公司关于「20x faster」「10K+ GPU 客户」「1000+ node hero runs」「35% MoM GPU 小时增长、6 个月 6 倍」「14M+ 下载」等均出自公司口径，缺少经审计财务、客户合同、当前供应合同/SLA 与独立性能复现。其「AI 算力瑞士」的中立性依赖不拥有 GPU、不卖 Token 的商业克制，但 Nebius、CoreWeave、Lambda、AWS 等合作伙伴关系中未公开排他、返点或优先级条款，不得据 logo 推断中立。开源社区的采用广度与商业版的可替代性、供应商集中度、数据驻留（SOC 2 适用范围）仍需尽调。
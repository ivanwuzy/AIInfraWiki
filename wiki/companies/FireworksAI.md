# Fireworks AI

> Sources: 横纵研究报告，2026-08-11
> Raw: [Fireworks AI 横纵分析报告](../../raw/sources/2026-08-11-fireworks-ai-横纵分析报告.md)
> Updated: 2026-08-11

## Overview

Fireworks AI, Inc. 将开放权重模型的 API、后训练与托管生产推理整合为一项服务：客户可使用 serverless、on-demand 或 reserved 部署，并获得模型专门化、账户及成本治理能力。主分类为 8.1 云与 AI 算力服务；5.5 推理及训练运行时优化仅作条件性 S 标签（须有独立优化软件交付）。对人形机器人公司，它是海外开源 VLM／LLM、检索及研发代理负载的候选采购／验证对象，而不是核心控制闭环或敏感训练数据的唯一生产路径。[来源：本页 Raw]

## 产品与技术边界

公开材料所列能力包括模型 API、serverless、on-demand／reserved 推理部署、微调、强化学习后训练、批处理、审计与成本导出；训练侧包含 guided／configuration training、自定义 RL、BYO trainer、rollout serving 和 weight sync。该交付将模型、GPU 容量、弹性、计量和运维服务打包，而不是向客户交付可独立运行的推理框架源码。[来源：本页 Raw]

Nexus／FireRouter 所支持的是模型路由、预算、身份及 API 治理，报告未找到其自有知识库、检索索引或工作流编排成为核心商业承载物的公开证据。同样，NVIDIA 与 AMD 的推理供给页面只能支持多硬件供给关系，不能推出统一的跨 XPU 调度、负载迁移或客户可控多来源算力资源池化与控制面。[来源：本页 Raw]

## 商业、团队与投资判断

创始团队履历集中于 Meta PyTorch、Meta 广告／大规模 ML 基础设施与 Google Vertex AI。公开客户案例包含 Cursor、Notion、Cresta、Quora、Sourcegraph 与 UiPath 等，但 logo、案例引语与供应商性能主张均不构成订单金额、排他性、客户集中度或通用性能的证据。[来源：本页 Raw]

公司在 2026-07-15 的 Series D 公告中声明完成 15.05 亿美元融资、投后估值 175 亿美元、ARR 超过 10 亿美元且每日服务逾 40 万亿 tokens；这些均为公司非审计声明，不能直接用于估值或单位经济性结论。早期轮次、持股、董事席位、GPU 配额和客户收入结构仍须通过原始融资文件、cap table、审计报表和合同核验。[来源：本页 Raw]

## 机器人适配与行动

建议有条件试点，用于代码助手、文档／知识检索、客服、仿真分析和非实时 VLM 评测。应在同一模型、地区和并发条件下，与自建 vLLM／SGLang／TensorRT-LLM 或云原厂栈对照 TTFT、P95／P99、吞吐、故障、单任务成本和输出质量；同时验证数据保留与训练使用权、区域合规、容量、模型／权重导出和退出协助。核心控制闭环、敏感传感器原始数据及唯一生产推理路径应保留自建或私有云基线。[来源：本页 Raw]

当前不建议以 headline ARR 或估值做投资决策，也不建议将整体并购作为主路径；优先在机器人研发 agent、视觉质检、仿真数据分析或专有 VLM 后训练上建立可退出的战略合作 PoC。详见 [Fireworks AI关键尽调问题](../questions/FireworksAI关键尽调问题.md)。[来源：本页 Raw]

## 分类

- 主类型：[8.1 云与 AI 算力服务](../segments/8.1-云与AI算力服务.md)：其已公开的核心交付物是开放模型的 serverless、on-demand／reserved 推理与 API 服务。
- 条件性次类型：[5.5 推理及训练运行时优化](../segments/5.5-推理及训练运行时优化.md)（S）：后训练和模型专门化只有在形成独立优化产品/合同后才纳入。
- 不设正式次分类：未见可验证的公开 PD 分离产品／架构、跨 XPU 统一调度，或以知识库／工作流编排为主的产品和收入证据；后训练能力不构成对标 PyTorch 的 5.1 训练框架。


# SiliconFlow GitHub 组织与 Mooncake/OneDiff 项目摘录

- Source: https://github.com/siliconflow ; https://github.com/siliconflow/onediff ; https://github.com/siliconflow/Mooncake ; https://raw.githubusercontent.com/siliconflow/onediff/main/README.md ; https://raw.githubusercontent.com/siliconflow/Mooncake/main/README.md
- Collected: 2026-08-09
- Published: Unknown（GitHub 实时页面）

以下为页面和 README 原文摘录：

> SiliconFlow builds scalable, standardized, and high-performance AI infrastructure. Powered by a self-developed inference engine, SiliconFlow delivers efficient and cost-effective large-model inference services, integrating hundreds of SOTA open-source models across language, speech, vision, and multimodal domains.

> GitHub 组织页列出 Flagship open-source projects，并展示 OneDiff、BizyAir、siliconcloud-cookbook 等公开仓库。

> onediff is an out-of-the-box acceleration library for diffusion models.

> onediff 提供 popular UIs/libs（such as HF diffusers and ComfyUI）的加速，以及 PyTorch code compilation tools 和 optimized GPU Kernels for diffusion models。

> OneDiff README 的招聘段落写有：working on onediff at SiliconFlow；联系邮箱为 talent@siliconflow.cn。

> Mooncake：A KVCache-centric Disaggregated Architecture for LLM Serving。

> Mooncake is the serving platform for Kimi, a leading LLM service provided by Moonshot AI.

> Mooncake 的 README 记载：vLLM v1 支持 Mooncake 的 KV Connector 用于 PD-disaggregated setups；TensorRT-LLM 集成 Mooncake Transfer Engine 用于 PD-disaggregated inference 的 KVCache transfer。

> Mooncake 的 README 同时记载：在 Kimi K2 的 128 H200 GPU 部署中，使用 PD disaggregation 和大规模 expert parallelism。

## 使用边界

- GitHub 组织名、官网品牌和 `@siliconflow.cn` 招聘邮箱支持“该开源组织与 SiliconFlow 品牌存在强关联”的判断；没有公司章程、雇佣、代码权属或许可链文件时，不能直接将所有仓库、提交人、IP和运营收入归入北京硅基流动科技股份有限公司。
- Mooncake README 中 Kimi/Moonshot AI 的生产叙述应归为 Mooncake 项目及其声明，不构成硅基流动向 Kimi/Moonshot AI 销售、拥有该部署、获得收入或提供商业 SLA 的证据。
- Mooncake 的 PD 设计证明存在一条公开的、与品牌强关联的技术路线；它不证明 SiliconFlow 云 API、预留实例或私有化产品已在生产中采用 P/D 分离，也不证明相关性能可迁移至机器人工作负载。

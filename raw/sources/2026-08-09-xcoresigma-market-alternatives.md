# 中科加禾横向比较：代表性替代方案的官方文档摘录

> Source: https://docs.vllm.ai/en/latest/；https://docs.pytorch.org/docs/stable/compile/；https://www.hiascend.com/document/detail/zh/CANNCommunityEdition/80RC3alpha003/quickstart/index/index.html
> Collected: 2026-08-09
> Published: Unknown (持续维护文档)

以下为各项目或厂商官网可见的原文摘录，用于界定采购方的可选路径；它们不证明这些项目与中科加禾存在客户、商业或技术关系。

## vLLM

vLLM 官方文档首页标题为“vLLM”。文档导航包含“Offline Inference”“Online Serving”“Inference and Serving”“Production Metrics”“Reproducibility”“Multi-Node Serving”以及“XPU - Intel® GPUs”。设计文档导航包含“torch.compile integration”“vLLM IR: Functional Intermediate Representation”。

## PyTorch

PyTorch 官方文档入口路径为 `torch.compile`。这是上游框架提供的编译接口文档，不是中科加禾产品资料。

## 昇腾 CANN

华为昇腾 CANN 社区版文档：帮助开发者认识、了解昇腾CANN，基于昇腾CANN进行人工智能应用的开发。

文档称，其“模型开发”主要介绍如何将PyTorch/TensorFlow网络迁移到昇腾平台并执行训练或推理；“应用开发”主要介绍如何基于昇腾计算语言AscendCL（Ascend Computing Language），进行图形图像预处理、单算子加速计算、深度学习推理计算等应用的开发。

文档列出《Ascend C自定义算子开发指南》、API参考、开发工具使用指南，以及包含算子开发与调用（Ascend C）、推理应用开发与部署等场景的样例仓。

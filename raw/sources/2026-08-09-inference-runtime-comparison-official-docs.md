# 推理运行时对照：KTransformers、vLLM、SGLang 官方资料摘录

> Source: https://ktransformers.net/zh ; https://docs.vllm.ai/en/latest/ ; https://docs.sglang.io/
> Collected: 2026-08-09
> Published: Unknown

以下为各项目官网或官方文档原文摘录：

> KTransformers：KTransformers 通过 CPU/GPU 异构计算，利用 CPU 的存储与计算能力，仅需一张 5090（32GB 显存）即可在本地部署千亿参数顶尖大模型。

> KTransformers：在消费级显卡上对千亿参数大模型进行全参数微调，无需昂贵的多卡集群。

> KTransformers：同时利用 CPU、GPU 和其他加速器优化推理。在消费级硬件上运行大模型。

> KTransformers：GPU 推理部分由 SGLang 提供支持。

> KTransformers 官网页脚：By 趋境科技。

> vLLM is a fast and easy-to-use library for LLM inference and serving.

> vLLM is fast with: State-of-the-art serving throughput; Efficient management of attention key and value memory with PagedAttention; Continuous batching of incoming requests, chunked prefill, prefix caching; Tensor, pipeline, data, expert, and context parallelism for distributed inference.

> SGLang is an inference framework meant for production level serving. It is designed to deliver low-latency and high-throughput inference across a wide range of setups, from a single GPU to large distributed clusters.

> SGLang is designed for low-latency, high-throughput inference with RadixAttention, prefix caching, and multi-GPU parallelism.

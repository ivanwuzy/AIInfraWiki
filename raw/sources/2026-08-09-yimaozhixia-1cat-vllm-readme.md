# 来源原文：GitHub｜1CatAI/1Cat-vLLM README

> Source URL: https://github.com/1CatAI/1Cat-vLLM
>
> Published: Unknown
>
> Accessed: 2026-08-09

页面可见原文摘录：

> 1Cat-vLLM 是面向 SM70 / Tesla V100 的 vLLM 工程分支。项目围绕 AWQ、注意力后端、长上下文稳定性、MTP 投机解码、运行时默认值和部署路径做了成体系的优化。
>
> 我们希望把一猫之下在 V100 上的工程经验、优化成果和验证过程贡献给开源社区，也欢迎继续使用 V100 的个人开发者、工作室和团队一起反馈、复现和改进。
>
> 1Cat-vLLM is a Tesla V100 / SM70 focused vLLM fork for serving modern Qwen-class AWQ and experimental FP8 models on Volta GPUs.
>
> 4 x Tesla V100 32 GB｜Main public reference target
>
> 2 x Tesla V100 32 GB｜Supported for selected 27B profiles with lower concurrency
>
> The public wheel path is validated on: OS: Ubuntu 24.04 LTS; Python: 3.12; CUDA toolkit: 12.8; PyTorch: CUDA 12.8 runtime wheels; GPU: Tesla V100 32 GB.
>
> Experimental FP8 work: FP8 model and KV-cache paths are included for validation, but they are not production defaults.
>
> Upstream project: vLLM. This fork focuses on SM70 AWQ support, V100-oriented attention/runtime tuning, and experimental FP8/MTP/DFlash validation paths.

Source note: 这是 GitHub 组织“1CatAI”公开仓库的 README 自述。仓库文字使用“一猫之下”，但未展示一猫之下（长沙）信息技术有限公司的统一社会信用代码、法律主体、著作权／雇佣／IP 归属或授权链；不得把仓库、代码提交、发布 wheel 或任何性能／部署主张自动归于目标法人。README 自己也将 FP8、MTP、DFlash 的部分路径标为实验性，并不构成生产级性能或可靠性保证。

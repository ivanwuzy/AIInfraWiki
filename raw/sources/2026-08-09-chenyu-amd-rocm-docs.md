# AMD ROCm documentation 首页

> Source: https://rocm.docs.amd.com/en/latest/
> Collected: 2026-08-09
> Published: Unknown（页面版本：ROCm 7.14.0）

## 原文摘录

ROCm is AMD’s open-source GPU computing platform: an end‑to‑end ecosystem of compilers, runtimes, and libraries for AI, HPC, and domain‑specific workloads. It is open source, cross‑platform (Linux and Windows), and optimized for AMD Instinct™, AMD Radeon™, and AMD Ryzen™ AI devices.

### Core SDK

The foundational libraries, runtimes, and tools for GPU computing on AMD hardware — math and compute libraries, communication primitives, HIP runtime, profiling and debugging tools, and more.

页面列出的 Components 包括：

- Math and compute libraries：Composable Kernel、hipBLAS、hipBLASLt、hipCUB、hipFFT、hipRAND、hipSOLVER、hipSPARSE、hipSPARSELt、MIOpen、rocBLAS、rocFFT、rocPRIM、rocRAND、rocSOLVER、rocSPARSE、rocThrust、rocWMMA。
- Communication libraries：RCCL、rocSHMEM。
- Runtime and compilers：HIP、HIPIFY、LLVM。
- Profiling and debugging tools：ROCm Compute Profiler、ROCm Systems Profiler、ROCprofiler-SDK、ROCm Debugger、ROCR Debug Agent。
- Control and monitoring tools：AMD SMI、ROCm Data Center Tool、rocminfo。

### AI Ecosystem

Full-stack documentation and recipes to deploy AI workloads on AMD GPUs using popular ROCm-enabled frameworks.

Deep learning frameworks：PyTorch、JAX。

Inference：vLLM、SGLang。

### GPU Systems and Infrastructure

Deployment and operations guidance for AMD Instinct GPUs at scale, including AMD GPU Driver installation, cluster management, GPU partitioning, monitoring, virtualization, cloud deployments, and containers.


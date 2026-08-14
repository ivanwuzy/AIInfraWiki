# CUDA C++ Programming Guide (Legacy)

> Source: https://docs.nvidia.com/cuda/cuda-c-programming-guide/
> Collected: 2026-08-07
> Published: Unknown

NVIDIA CUDA C++ Programming Guide 说明：

> CUDA is a parallel computing platform and programming model developed by NVIDIA that enables dramatic increases in computing performance by harnessing the power of the GPU.

> In November 2006, NVIDIA introduced CUDA, a general purpose parallel computing platform and programming model that leverages the parallel compute engine in NVIDIA GPUs to solve many complex computational problems in a more efficient way than on a CPU.

该指南将 CUDA 的核心抽象描述为：

> At its core are three key abstractions — a hierarchy of thread groups, shared memories, and barrier synchronization — that are simply exposed to the programmer as a minimal set of language extensions.

其 kernel 定义说明：

> CUDA C++ extends C++ by allowing the programmer to define C++ functions, called kernels, that, when called, are executed N times in parallel by N different CUDA threads.

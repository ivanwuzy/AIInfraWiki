# NVIDIA TensorRT Quick Start Guide

> Source: https://docs.nvidia.com/deeplearning/tensorrt/latest/getting-started/quick-start-guide.html
> Collected: 2026-08-09
> Published: Unknown（页面版本：TensorRT 11.2.1）

## 原文摘录

### What Is TensorRT?

NVIDIA TensorRT is an SDK that takes a trained deep learning model and turns it into a fast, GPU-specific program for running inference, the act of computing predictions on new inputs after training is complete. It has two parts that you will see referenced throughout this guide:

- A builder that compiles your model into a serialized, hardware-specific binary called an engine (sometimes also called a plan file). The builder picks the fastest available GPU kernel (a low-level GPU function) for each layer in your network.
- A runtime that loads the engine into your application and executes it on the GPU.

You typically start from a trained model exported to ONNX, a framework-neutral interchange format that PyTorch, TensorFlow, and most other training frameworks can produce. TensorRT reads the ONNX file, builds the engine, and then your application uses the runtime to serve predictions.

The result: a compiled engine that runs your model on the GPU faster than executing it in the original training framework. The actual speedup depends on the model, precision, batch size, and GPU. Refer to the NVIDIA AI Inference Performance page and MLPerf inference submissions for authoritative comparative numbers.

### Conversion

There are four main options for converting a model with TensorRT:

- Using Torch-TensorRT
- Automatic ONNX conversion from `.onnx` files
- Using the GUI-based tool Nsight Deep Learning Designer
- Manually constructing a network using the TensorRT API (either in C++ or Python)

The PyTorch integration (Torch-TensorRT) provides model conversion and a high-level runtime API for converting PyTorch models. It can fall back to PyTorch implementations where TensorRT does not support a particular operator. For Torch-TensorRT and ONNX-TRT operator coverage in this doc set, refer to Performance Benchmarking and TensorRT Operators.

ONNX conversion requires full operator coverage; that is, all operations in your model must be supported by TensorRT (or you must provide custom plugins for unsupported operations).

### Deployment

The TensorRT runtime API allows for the lowest overhead and finest-grained control. However, operators that TensorRT does not natively support must be implemented as plugins.


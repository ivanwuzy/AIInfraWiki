# runpod 官方来源摘录

> URL: https://docs.runpod.io/serverless/overview
> Collected: 2026-08-09
> Published: 未知（页面截至抓取日可见）

Overview - Runpod Documentation
Documentation Index
Fetch the complete documentation index at:
/llms.txt
Use this file to discover all available pages before exploring further.
Skip to main content
Runpod Documentation
home page
Search...
⌘
K
Ask Assistant
Search...
Navigation
Serverless
Overview
Docs
Examples
Community
CLI
API v1
API v2 (BETA)
Models
Release notes
Docs
Examples
Community
CLI
API v1
API v2 (BETA)
Models
Release notes
Serverless
Overview
Copy page
Copy page
Pay-as-you-go compute for AI models and compute-intensive workloads. Review configuration and operations guidance for Runpod Serverless.
Copy page
Copy page
Runpod Serverless is a cloud computing platform that lets you serve AI models for
and run other compute-intensive workloads without managing servers. You only pay for the actual compute time you use, with no idle costs when your application isn’t processing requests.
​
Get started
Quickstart
Write a handler function, build a worker image, create an endpoint, and send your first request.
Generate images with ComfyUI
Deploy a ComfyUI worker and generate images using JSON workflows.
Fork a worker repository
Use Runpod’s worker templates on GitHub as a starting point.
​
Concepts
​
Endpoints
The access point for your Serverless application. Endpoints provide a URL where users or applications can send requests to run your code. Each endpoint can be configured with different compute resources, scaling settings, and other parameters to suit your specific needs.
​
Workers
The container instances that execute your code when requests arrive at your endpoint. Each worker runs your custom Docker container with your application code and dependencies. Runpod automatically manages worker lifecycle, starting them when needed and stopping them when idle to optimize resource usage.
​
Handler functions
The core of your Serverless application. These functions define how a worker processes incoming requests and returns results. They follow a simple pattern:
import
runpod
# Required
def
handler
(event):
# Extract input data from the request
input_data
=
event[
"input"
]
# Process the input (replace this with your own code)
result
=
process_data(input_data)
# Return the result
return
result
runpod.serverless.start({
"handler"
: handler})
# Required
Handler functions are only used for
(i.e. traditional endpoints). If you’re using a
, the request structure and endpoints will depend on how you define your HTTP servers.
​
Requests
An HTTP request that you send to an endpoint, which can include parameters, payloads, and headers that define what the endpoint should process. For example, you can send a
POST
request to submit a
, or a
GET
request to check status of a job, retrieve results, or check endpoint health.
When a user/client sends a request to your endpoint:
If no workers are active, Runpod automatically starts one (cold start).
The request is queued until a worker is available.
A worker processes the request using your handler function.
The result is returned to the user/client after they call
/status
(or automatically if you used
/runsync
).
Workers remain active for a period to handle additional requests.
Idle workers eventually shut down if no new requests arrive.
​
Cold starts
A “cold start” refers to the time between when an endpoint with no running workers receives a request, and when a worker is fully “warmed up” and ready to handle the request. This generally involves starting the container, loading models into GPU memory, and initializing runtime environments. Larger models take longer to load into memory, increasing cold start time, and request response time by extension.
Minimizing cold start times is key to creating a responsive and cost-effective endpoint. You can reduce cold starts by using
cached models
, enabling
FlashBoot
, setting
active worker counts
above zero.
​
Load balancing endpoints
These endpoints route incoming traffic directly to available workers, distributing requests across the worker pool. Unlike
, they provide no queuing mechanism for request backlog.
When using load balancing endpoints, you can define your own custom API endpoints without a handler function, using any HTTP framework of your choice (like FastAPI or Flask).
​
Development workflow
Here’s a typical Serverless development workflow:
Write a handler function
to process API requests.
Test it locally
using the Runpod SDK.
Create a Dockerfile
to package the handler function and all its dependencies.
Build and push
the worker image to Docker Hub (or another container registry).
… or
deploy directly from a GitHub repository
.
Deploy the worker image to a
Serverless endpoint
.
Monitor logs
, debug running workers
with SSH
.
Adjust your
endpoint settings
to
optimize performance and cost
.
To update your endpoint logic, go back to step 1 and repeat the process.
Was this page helpful?
Yes
No
Suggest edits
Raise issue
⌘
I
Assistant
Responses are generated using AI and may contain mistakes.
# Source: oneflow-arxiv

- URL: https://arxiv.org/abs/2110.15032
- Collected: 2026-08-09
- Published: Unknown

## Extract





 
[2110.15032] OneFlow: Redesign the Distributed Deep Learning Framework from Scratch
































































 
 














Skip to main content






arXiv is now an independent nonprofit!


Learn more


×





































      Search
    


Submit


Donate




Log in












Search arXiv











      Press Enter to search · 
Advanced search


















Computer Science > Distributed, Parallel, and Cluster Computing






arXiv:2110.15032
 (cs)
    









  [Submitted on 28 Oct 2021 (
v1
), last revised 19 Apr 2022 (this version, v6)]


Title:
OneFlow: Redesign the Distributed Deep Learning Framework from Scratch


Authors:
Jinhui Yuan
, 
Xinqi Li
, 
Cheng Cheng
, 
Juncheng Liu
, 
Ran Guo
, 
Shenghang Cai
, 
Chi Yao
, 
Fei Yang
, 
Xiaodong Yi
, 
Chuan Wu
, 
Haoran Zhang
, 
Jie Zhao
 
View a PDF of the paper titled OneFlow: Redesign the Distributed Deep Learning Framework from Scratch, by Jinhui Yuan and Xinqi Li and Cheng Cheng and Juncheng Liu and Ran Guo and Shenghang Cai and Chi Yao and Fei Yang and Xiaodong Yi and Chuan Wu and Haoran Zhang and Jie Zhao


View PDF




Abstract:
Deep learning frameworks such as TensorFlow and PyTorch provide a productive interface for expressing and training a deep neural network (DNN) model on a single device or using data parallelism. Still, they may not be flexible or efficient enough in training emerging large models on distributed devices, which require more sophisticated parallelism beyond data parallelism. Plugins or wrappers have been developed to strengthen these frameworks for model or pipeline parallelism, but they complicate the usage and implementation of distributed deep learning. Aiming at a simple, neat redesign of distributed deep learning frameworks for various parallelism paradigms, we present OneFlow, a novel distributed training framework based on an SBP (split, broadcast and partial-value) abstraction and the actor model. SBP enables much easier programming of data parallelism and model parallelism than existing frameworks, and the actor model provides a succinct runtime mechanism to manage the complex dependencies imposed by resource constraints, data movement and computation in distributed deep learning. We demonstrate the general applicability and efficiency of OneFlow for training various large DNN models with case studies and extensive experiments. The results show that OneFlow outperforms many well-known customized libraries built on top of the state-of-the-art frameworks. The code of OneFlow is available at: 
this https URL
.
    








Subjects:




Distributed, Parallel, and Cluster Computing (cs.DC)
; Artificial Intelligence (cs.AI); Machine Learning (cs.LG)




Cite as:


arXiv:2110.15032
 [cs.DC]






 


(or 


arXiv:2110.15032v6
 [cs.DC]
 for this version)
          






 


 
https://doi.org/10.48550/arXiv.2110.15032






Focus to learn more








                  arXiv-issued DOI via DataCite
















Submission history
 From: Jinhui Yuan [
view email
]      
 
[v1]

        Thu, 28 Oct 2021 11:32:14 UTC (6,212 KB)


[v2]

        Fri, 29 Oct 2021 02:33:23 UTC (6,212 KB)


[v3]

        Thu, 27 Jan 2022 06:43:05 UTC (6,212 KB)


[v4]

        Tue, 8 Feb 2022 06:46:28 UTC (6,212 KB)


[v5]

        Tue, 22 Mar 2022 14:42:54 UTC (6,212 KB)


[v6]

        Tue, 19 Apr 2022 11:57:54 UTC (6,212 KB)








 




Full-text links:


Access Paper:





View a PDF of the paper titled OneFlow: Redesign the Distributed Deep Learning Framework from Scratch, by Jinhui Yuan and Xinqi Li and Cheng Cheng and Juncheng Liu and Ran Guo and Shenghang Cai and Chi Yao and Fei Yang and Xiaodong Yi and Chuan Wu and Haoran Zhang and Jie Zhao
View PDF
TeX Source
 






view license






 


Current browse context:


cs.DC






< prev




  |  
 


next >






new


 | 


recent


 | 
2021-10



    Change to browse by:
    


cs


cs.AI


cs.LG










References & Citations




NASA ADS
Google Scholar


Semantic Scholar










DBLP
 - CS Bibliography




listing
 | 
bibtex
 




Jinhui Yuan
Xinqi Li
Cheng Cheng
Fei Yang
Xiaodong Yi
 
…






export BibTeX citation


Loading...










BibTeX formatted citation


×






loading...






Data provided by: 










Bookmark












 










Bibliographic Tools




Bibliographic and Citation Tools














Bibliographic Explorer Toggle








Bibliographic Explorer
 
(
What is the Explorer?
)
















Connected Papers Toggle








Connected Papers
 
(
What is Connected Papers?
)














Litmaps Toggle








Litmaps
 
(
What is Litmaps?
)
















scite.ai Toggle








scite Smart Citations
 
(
What are Smart Citations?
)




















Code, Data, Media




Code, Data and Media Associated with this Article














alphaXiv Toggle








alphaXiv
 
(
What is alphaXiv?
)
















Links to Code Toggle








CatalyzeX Code Finder for Papers
 
(
What is CatalyzeX?
)
















DagsHub Toggle








DagsHub
 
(
What is DagsHub?
)
















GotitPub Toggle








Gotit.pub
 
(
What is GotitPub?
)
















Huggingface Toggle








Hugging Face
 
(
What is Huggingface?
)
















ScienceCast Toggle








ScienceCast
 
(
What is ScienceCast?
)
























Demos




Demos














Replicate Toggle








Replicate
 
(
What is Replicate?
)
















Spaces Toggle








Hugging Face Spaces
 
(
What is Spaces?
)
















Spaces Toggle








TXYZ.AI
 
(
What is TXYZ.AI?
)


















Related Papers




Recommenders and Search Tools














Link to Influence Flower








Influence Flower
 
(
What are Influence Flowers?
)
















Core recommender toggle








CORE Recommender
 
(
What is CORE?
)












Author


Venue


Institution


Topic



























        About arXivLabs
      








arXivLabs: experimental projects with community collaborators


arXivLabs is a framework that allows collaborators to develop and share new arXiv features directly on our website.


Both individuals and organizations that work with arXivLabs have embraced and accepted our values of openness, community, excellence, and user data privacy. arXiv is committed to these values and only works with partners that adhere to them.


Have an idea for a project that will add value for arXiv's community? 
Learn more about arXivLabs
.






















Which authors of this paper are endorsers?
 |
    
Disable MathJax
 (
What is MathJax?
)
    



















        We gratefully acknowledge support from
        our 
major funders
,
        
member institutions
, 
,
        and all contributors.
      




About


·


Help


·


Contact


·


Subscribe


·


Copyright


·


Privacy


·


Accessibility


·


Operational Status
 (opens in new tab)








Major funding support from




























 






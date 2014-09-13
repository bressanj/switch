---
layout: post
date: 2014-09-08
title: Check out some R code highlighting!
excerpt: Excerpt adipisicing elit. Quo, iure, excepturi. Ea pariatur deleniti fuga, ut sed expedita iure, corrupti vero eius velit necessitatibus recusandae repellat. Nisi corporis, error iure.
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse blanditiis corporis velit iusto explicabo, illum aut veritatis eum, cumque placeat doloremque animi nesciunt sunt. Nesciunt aliquid dolore mollitia quis repellendus pariatur at exercitationem optio minima sequi minus praesentium illo ut hic nobis amet, unde velit maxime illum tenetur impedit deleniti reiciendis blanditiis quas? Minima alias consequatur necessitatibus pariatur tempore vel dignissimos, quisquam eos fugiat, eum laboriosam, sed itaque modi quod sapiente nostrum laudantium hic omnis. Ipsam, aspernatur hic cupiditate. 

> You should check out some R Code highlighting:  

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatem aliquam ab facilis quasi esse, minima aspernatur ratione magnam minus magni veniam corporis, iure ducimus nesciunt sit voluptatum! Eum rerum autem asperiores ad quia delectus soluta animi, molestias enim, mollitia atque modi. Quidem facere dignissimos in itaque. Quas, dolore obcaecati.


{% highlight r %}
surv.obj <- with(db, Surv(time, deceased))
fit.0 <- survfit(surv.obj ~ 1, data=db)

plot(fit.0, conf.int=FALSE, xlab="Survival Time in Months",
   ylab="% Surviving", yscale=100,
   main="Survival Distribution (Overall)") 

summary(fit.0)$table
{% endhighlight %}

Lorem ipsum dolor sit amet, consectetur [Markdown][1] adipisicing elit. Nisi consequuntur temporibus, sint facere doloremque voluptas nihil, laudantium eveniet, sit magni rerum ducimus? Expedita cum, sunt commodi dolor ea explicabo voluptas odio rerum at aliquam, deleniti minus magnam maiores nihil itaque, sint molestias atque quo magni nam. Pariatur debitis maxime beatae.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis repellat, exercitationem ea perferendis commodi dignissimos sapiente, saepe recusandae dolorum neque dolor libero. Excepturi labore, qui sequi sunt perferendis. Sapiente, nulla!

[1]: http://en.wikipedia.org/wiki/Markdown
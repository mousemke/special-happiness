# Stakeholder Communication

This can be both the most important and the hardest. Micro frontends are, at the end of the day, a technical solution however there are real benefits that can be communicated

1. New features

   Whole pieces of the app can be switched out with a flip of a switch. It can make enabling new features immediate by just running them somewhere else and switching the targets

2. Simplified Architecture

   What our main repo and 2 team repos are is simply 3 normal react repos. while the interactions between them need to be initially explained to new devs that may have never seen it, there is no difference between how they operate and how normal apps operate

3. Migration

   For the same reason new features are easy, we can also migrate old sections of code when needed. We just simply start the new service next to the old one. Tne we change one small string and the new code will start running. And just in case it doesn't work, we can immediately switch back

4. Scaling

   As the app scales up, we can just add new people. As we know, things can get complicated when too many people are working in one service or on one part of code. With micro frontends, we can just add a new frontend with new people working on if.

5. Tech

   The is no restrictino on tech choises. Though we should stick to approved technology, different teams can weigh what tech would work best for the problem they are trying to solve and use the correct tools to solve it

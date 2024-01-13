# QWERTY Practice
[QWERTY Practice on Netlify](https://qwerty-practice.netlify.app/) You can use the web app here.

## The Problem
While coding on QWERTY keyboards, I realized that my right hand would frequently drift leaving my right wrist at odd angles. Some of the issues were that the right hand has to type all bracket and parenthesis, the right hand is responsible for +,  =, -, |, \, and _. 

At first I thought it would be great if keyboards had open bracket and open parenthesis tied to the left hand. Imagine a key between tab and Q for [ and {, a key to the left of A for < and , etc. However, I started to read into what could make a good keyboard layout. There are a lot of good discussions on whether Colemak or Dvorak would be better. But frequently typing competitions show QWERTY is still an effective layout. Which raised the question, why are so many comfortable and dexterous with QWERTY? But some struggle with wrist or finger strain?

A deep dive revealed that QWERTY has always been very good at common bigrams in the English language (and relatively good for Spanish as well). The designers did a great job on the initial design. The special characters that I were concerned about were not included in the original layout (and may always be a point of strain for programmers). A lot of work went into QWERTY, but one small feature became a flaw. The designers chose to use I and O for One and Zero. 

To explain why this is a problem the left hand has very common characters on the home row: A, S, and D all function as “anchors” to naturally incentivize the left hand to position over the home row. The right hand has very under-used character on the home row: semi-colon, J, and K. This incentivizes the right hand to hover over I and O, but it’s also responsible for commas and periods. The right hand has a poor “anchor” row and a lot of ground to cover.

If I and O were never used for numbers I can imagine the keys [ U, I, O, P ] swapped with [ J, K, L, ; ]. To give the right hand a symmetrical point of repose with the left, while maintaining good flow with bigrams.

## The Idea
I thought back on how I had learned touch-typing, some of the patterns were useful, others were uninspired patterns. AQAZ, SWSX, DEDC, …repeating the same finger is frequently not something users perform on a keyboard (except for words like “call”, “pizza”, and “Mississippi”). If I made a typing application that would rehearse getting both the left and right hands back to their home rows, while stretching for special characters, would my right hand improve?

The theory became more specific by asking, "if phrases of 3 or 4 characters used characters with one for each finger, would my hand movement improve?"

The process started with trial and error, I had moments where all the patterns were improving my typing speed or typing comfort. While other times some patterns were found to be unhelpful. For example, I had to choose to omit  |, \, }, and ] to keep in line with the vision of the right hand flowing naturally with it’s home row. Later I added in common English words as well as keywords for programming languages.

I was pleasantly surprised to see the theory paid off, my right hand has improved it’s movement, and I would like to share this application with other programmers, or keyboard users who would like to maintain healthy typing patterns.

## The UI
I chose to go with a simple UI where the user could clearly see the typing prompt as well as their inputs. A lot of typing applications end up hiding the users mistake by not displaying the typo, and I want users to be able to see their typos if they make a mistake.

The font turns red when an error has occurred and green when the prompt is completed. The user can reload the page, or use the reset button to get another prompt. At the end, the user gets to see their typing speed. (With how difficult traversing this many characters can be, I’d say 25 words / minute is “good”, 35+ is “great”, and 50+ or higher is “phenomenal”). 

The prompt is a fixed length, something that could be completed in under 5 minutes. But longer than the average length of 3 sentences. Users are free to quickly start and attempt a randomized prompt at their leisure.

## For Future
I would really like to create pages for alternative keyboard layouts such as AZERTY or Colemak. As well as common words for different languages, toggled by user input. Currently the project is at a good point of completion and I will be happy to revisit these ideas in the future.

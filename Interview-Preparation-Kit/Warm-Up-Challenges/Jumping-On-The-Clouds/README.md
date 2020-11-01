# Jumping On The CLouds

Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus _1_ or _2_. She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. For example, _c=\[0,1,0,0,0,1,0]_ indexed from _0...6_. The number on each cloud is its index in the list so she must avoid the clouds at indexes _1_ and _5_. She could follow the following two paths: _0 -> 2 -> 4 -> 6_ or _0 -> 2 -> 3 -> 4 -> 6_. The first path takes _3_ jumps while the second takes _4_.

### Function Description

Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

- c: an array of binary integers

### Input Format

The first line contains an integer n, the total number of clouds. The second line contains n space-separated binary integers describing clouds _c\[i]_ where _0 <= i < n_.

### Constraints

- 2 <= n <= 100
- c[i] can either be 0 or 1
- c[0] = c[n-1] = 0

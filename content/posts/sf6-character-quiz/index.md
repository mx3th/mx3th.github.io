---
title: "Want to find out which Street Fighter 6 character to play? Try this quiz!"
date: 2023-04-19T16:52:25Z
draft: false
description: "Quiz to find out which Street Fighter 6 character you should play."
tags: ["Fighting Games", "Street Fighter"]
series: ["Street Fighter"]
series_order: 2
---

{{< lead >}}
Not sure who to play in Street Fighter 6? Take this character quiz to find out!
{{< /lead >}}

## Street Fighter 6 Character Quiz

<form name="quiz">
  <h3>How experienced are you with fighting games? Choose the option that best suits you.</h3>
  <input type="radio" name="exp" value="new">
  <label for="new">I am new / have never played a fighting game before.</label><br>
  <input type="radio" name="exp" value="modest">
  <label for="modest">I have played some fighting games and am interested in them.</label><br>
  <input type="radio" name="exp" value="skilled">
  <label for="skilled">I am passionate about fighting games and play at a competitive level.</label><br>

  <h3>Which of the following best matches your preferred playstyle? (You can use your experiences from other games)</h3>
  <input type="radio" name="style" value="rounded">
  <label for="rounded">An all-rounder playstyle / Jack of all trades, master of none.</label><br>
  <input type="radio" name="style" value="heavy">
  <label for="heavy">Heavy hitters. They might be slow & tanky, but they deal tons of damage!</label><br>
  <input type="radio" name="style" value="ranged">
  <label for="ranged">Ranged fighters. I don't want my opponent to be anywhere near me.</label><br>
  <input type="radio" name="style" value="speed">
  <label for="speed">Speed. I like to outmaneuver my opponent.</label><br>

  <h3>Do you have a character gender preference?</h3>
  <input type="radio" name="gender" value="none">
  <label for="none">No preference.</label><br>
  <input type="radio" name="gender" value="male">
  <label for="male">I prefer male characters.</label><br>
  <input type="radio" name="gender" value="female">
  <label for="female">I prefer female characters.</label><br>

</form>

<button type="button" onclick="score();">Submit</button>

<script src="script.js"></script>
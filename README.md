# Tic

Tic is an in-browser, no dependecy estimated reading time estimator.

It's based on the behavior described in [this blogpost by Medium](https://blog.medium.com/read-time-and-you-bc2048ab620c)

## Criteria

For text, we calculate 180 words per minute, then we add 3 seconds per image, with a few extra bonus seconds for the first few images as described in the medium blog post

## Usage

```
  <span id="estimated-read-time"></span>
  <section id="content">
    ...
  </section>

  <script>
    let ert = document.getElementById("estimated-read-time")
    ert.textContent = Tic(document.getElementById("content"));
  </script>
```

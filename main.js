slider = document.getElementById('slider');
first_span=document.getElementById('first_span');
second_span=document.getElementById('second_span');
third_span=document.getElementById('third_span');
function right()
{
  slider.style.left='520px';
}
function center()
{
  slider.style.left='0px';
}
function left()
{
  slider.style.left='-520px';
}
first_span.onclick=right;
second_span.onclick=center;
third_span.onclick=left;
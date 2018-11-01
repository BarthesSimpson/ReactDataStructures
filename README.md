# ReactDataStructures

Had a dream where I was interviewing at Facebook and they asked me to reverse a linked list. So I did it in React. Woke up and decided to make it a reality.

```
    <LinkedList vals={[1, 2, 3, 4, 5]}>
      {list => <Reverse list={list}>{reversed => reversed}</Reverse>}
    </LinkedList>
```

result:

```
5 > 4 > 3 > 2 > 1
```

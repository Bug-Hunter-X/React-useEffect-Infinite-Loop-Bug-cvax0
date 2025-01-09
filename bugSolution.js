```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: This will run only once after the initial render
    setCount(count + 1);
  }, []); //Empty dependency array

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```
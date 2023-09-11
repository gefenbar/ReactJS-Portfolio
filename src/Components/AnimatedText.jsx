function AnimatedText() {

    useFrame(() => {
      // Animate text
    });
  
    return (
      <mesh>
        <textGeometry args={['Hello World', {}]}/>
      </mesh>
    );
  }
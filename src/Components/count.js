import React, { useState } from "react";
import { Button } from '@material-ui/core';

export default function Exp() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Clicked {count} times </p>
            <Button onClick={() => setCount(count + 1)}  type="submit" margin="dense" variant="contained" color="primary">Click</Button>
        </div>
    );
}
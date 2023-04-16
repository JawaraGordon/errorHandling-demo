function handleError(err) {
  if (err instanceof TypeError) {
    console.error(`TypeError: ${err.message}`);
  } else if (err instanceof RangeError) {
    console.error(`RangeError: ${err.message}`);
  } else {
    console.error(`Error: ${err.message}`);
  }
  return err;
}

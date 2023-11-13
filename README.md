# Run test files

Ensure you have permission to run the script
```bash
    sudo chmod 777 run_spec_tests.sh
```

## Run all tests
```bash
    ./run_spec_tests.sh
```

## Run a specific test
```bash
    ./run_spec_tests.sh <test_path>
    # Example
    ./run_spec_tests.sh "cypress/e2e/Beam.feature"
```

## Run multiple tests
```bash
    ./run_spec_tests.sh "<test_path> <test_path2> ..."
    # Example
    ./run_spec_tests.sh "cypress/e2e/Beam.feature cypress/e2e/S3D.feature"
```
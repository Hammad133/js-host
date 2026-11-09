
nextflow.enable.dsl = 2

process TEST_ALERT {
    output:
    path 'test.txt'

    script:
    """
    echo '<script>alert(9)</script>' > test.txt
    """
}

workflow {
    TEST_ALERT()
}

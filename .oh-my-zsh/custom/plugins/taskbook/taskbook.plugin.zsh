# Taskbook command completion

# Functio

_taskbook_commands () {
	if which tb &> /dev/null; then
    array_of_lines=("${(@f)$(tb | grep -o '[0-9]\+\..*\|@\w*')}")
    compadd -d array_of_lines -X 'Some completions' -- $(tb | grep -o '[0-9]\+\.\|@\w*' | grep -o '[0-9]\+\|@\w*')
	fi
}

# Completion setup
compdef _taskbook_commands tb


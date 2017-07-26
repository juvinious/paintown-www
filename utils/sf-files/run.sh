#!/bin/bash
bundle install --path vendor/bundle &> run.log
bundle exec ruby sf-files-to-github-releases.rb "$@"

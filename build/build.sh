../libs/closure-library/closure/bin/build/depswriter.py  --root_with_prefix="../src/ ../../../../src/" > ./deps.js

java -jar ../libs/closure-compiler.jar \
    --compilation_level SIMPLE_OPTIMIZATIONS \
    --language_in=ECMASCRIPT5_STRICT \
    --warning_level VERBOSE \
    --only_closure_dependencies\
    --summary_detail_level 3 \
    --process_closure_primitives true \
    --externs=../libs/gl-matrix-extern.js \
    --closure_entry_point="Lemon.Sprite"\
    --closure_entry_point="Lemon.Mesh"\
    --closure_entry_point="Lemon.Scene"\
    --closure_entry_point="Lemon.RenderCanvas"\
    --closure_entry_point="Lemon.PostEffect"\
    --closure_entry_point="Lemon.ProgramLibrary"\
    --closure_entry_point="Lemon.Model"\
    --js='../src/**.js' \
    --js='../libs/closure-library/**.js' \
    --js='!../libs/closure-library/**_test.js' \
    --js_output_file Lemon.min.js

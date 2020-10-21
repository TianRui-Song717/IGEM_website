function map_attract_new = attract_wave(map_attract_alt)
delta_attract = -5+10*rand(102,102); % rand(-5~+5)
map_attract_new = map_attract_alt + delta_attract;

for i = 1:102
    for j = 1:102
        if map_attract_new(i,j)<0
            map_attract_new(i,j)=0;
        end
    end
end